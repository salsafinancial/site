defmodule WpSalsaWeb.DepositLive do
  use Phoenix.LiveView

  alias WpSalsa.Stake
  alias WpSalsa.Request.Crm


  @impl true
  def mount(_params, session, socket) do
    min_deposit_allowed = session["min_deposit_allowed"]
    {:ok, assign(
      socket,
      publicKey: nil,
      changeset: Stake.changeset(%Stake{}, %{"amount" => "#{min_deposit_allowed}", "amount_range" => "#{min_deposit_allowed}"}),
      time_period_month: "0",
      loading: false,
      confirmed: false,
      available: session["available"],
      min_deposit_allowed: min_deposit_allowed,
      publicKey: session["publicKey"],
      wallet: System.get_env("WALLET"),
      apy_20_from: session["apy_20_from"]
    )}
  end

  def render(assigns) do
    Phoenix.View.render(WpSalsaWeb.DepositView, "index.html", assigns)
  end

  # Handle que se encarga de cambiar el periodo de tiempo del deposito
  def handle_event("change_period_time", params, socket) do
    if socket.assigns.loading do
      {:noreply, socket}
    else
      {:noreply, assign(socket, time_period_month: params["months"])}
    end
  end

  # Handle que valida el formulario
  def handle_event("validate", params, socket) do
    value = if Enum.at(params["_target"], 0) == "amount_range" do params["amount_range"] else params["amount"] end
    data =
      %{
        "amount" => if params["amount_range"] == "" do "0" else value end,
        "amount_range" => if params["amount_range"] == "" do "0" else value end,
      }
    cset =
      %Stake{}
      |> Stake.changeset(data)
      # |> Map.put(:action, !Stake.changeset(%Stake{}, params).valid?)
      {:noreply, assign(socket, changeset: cset)}
  end

  # Handle que guarda el formulario, no se usa porque el submit se envia al app.js
  def handle_event("save", %{"user" => user_params}, socket) do
    {:noreply, socket}
  end

  # Este handle es llamado desde el app.js para obtener información del proceso de deposito, y envia la información al padre dashboard_live para que actualice la info
  def handle_event("process_deposit", params, socket) do
    case params["step"] do
      "loading" ->
        {:noreply, assign(socket, loading: true)}
      "confirmed" ->
        IO.inspect params
        amount = Float.parse(socket.assigns.changeset.changes.amount) |> elem(0)
        apy = if amount > socket.assigns.apy_20_from do 20 else 10 end
        response = Crm.save_deposit(params["data"], socket.assigns.publicKey,:erlang.float_to_binary( amount, [decimals: 6]), apy, socket.assigns.time_period_month)
        case response do
          {:ok, data} ->
            send(socket.parent_pid, {:process_deposit, params})
            {:noreply, assign(socket, loading: false)}
          _ ->
            send(socket.parent_pid, {:process_deposit, %{ "step" => "error", "data" => %{} }})
            {:noreply, assign(socket, loading: false)}
        end
      "error" ->
        send(socket.parent_pid, {:process_deposit, params})
        {:noreply, assign(socket, loading: false)}
      _ ->
        {:noreply, socket}
    end
  end

  # Este handle es llamado desde el app.js para obtener información de la wallet, y envia la información al padre dashboard_live para que actualice la info
  def handle_event("get_tokens_account", params, socket) do
    send(socket.parent_pid, {:get_tokens_account, params})
    {:noreply, socket}
  end

  # Este handle es utilizado para ajustar el valor a depositar al max disponible en la wallet
  def handle_event("max_available", _, socket) do
    if socket.assigns.loading do
      {:noreply, socket}
    else
      data = %{
        "amount" => "#{socket.assigns.available}",
        "amount_range" => "#{socket.assigns.available}",
      }
      cset =
        %Stake{}
        |> Stake.changeset(data)
        {:noreply, assign(socket, changeset: cset)}
    end
  end

end
