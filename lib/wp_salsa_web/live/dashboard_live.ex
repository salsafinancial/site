defmodule WpSalsaWeb.DashboardLive do
  use Phoenix.LiveView
  alias WpSalsa.Request.Crm


  @impl true
  def mount(params, session, socket) do
    send(self(), :load_salsa_account)
    socket = socket
    |> PhoenixLiveSession.maybe_subscribe(session)
    {:ok, assign(
      socket,
      publicKey: nil,
      list_tokens: [],
      tokens_account: [],
      usdc_data: %{},
      solanas: 0.0,
      loading: false,
      loading_crm: true,
      loading_in_modal: false,
      loading_transactions: false,
      modal: "",
      min_deposit_allowed: 0.1,
      salsa_account: nil,
      error_salsa_account: false,
      error_transactions: false,
      transactions: nil,
      wallet_account: nil,
      error_wallet: false,
      tab: if session["tab"] != nil do session["tab"] else "deposit" end,
      is_phantom_pre_connection: session["is_phantom_pre_connection"],
      apy_20_from: 1
    )}
  end

  def render(assigns) do
    Phoenix.View.render(WpSalsaWeb.DashboardView, "index.html", assigns)
  end


  @doc """
    Handle que carga la info de la cuenta de salsa en el back
  """
  def handle_info(:load_salsa_account, socket) do
    response = Crm.salsa_account()
    case response do
      {:ok, data} ->
        {:noreply, assign(socket, salsa_account: data, loading_crm: false)}
      _ ->
        {:noreply, assign(socket, error_salsa_account: true, loading_crm: false)}
    end
  end

  def handle_info({:load_wallet_account, wallet}, socket) do
    response = Crm.wallet_account(wallet)
    case response do
      {:ok, data} ->
        {:noreply, assign(socket, wallet_account: data, error_wallet: false, loading_wallet: false)}
      _ ->
        {:noreply, assign(socket, error_wallet: true, loading_wallet: false)}
    end
  end

  def handle_info({:load_transactions, wallet}, socket) do
    response = Crm.list_transactions(wallet)
    case response do
      {:ok, data} ->
        {:noreply, assign(socket, transactions: data, error_transactions: false, loading_transactions: false)}
      _ ->
        {:noreply, assign(socket, transactions: nil, error_transactions: true, loading_transactions: false)}
    end
  end


  # Este handle es llamado desde el app.js para obtener el publickey de la wallet
  def handle_event("get_publicKey_solana", params, socket) do
    if params["publicKey"] != nil do
      send(self(), {:load_transactions, params["publicKey"]})
      send(self(), {:load_wallet_account, params["publicKey"]})
      send(self(), :load_salsa_account)
      socket = socket |> PhoenixLiveSession.put_session("is_phantom_pre_connection", true)
      {:noreply, socket |> assign(publicKey: params["publicKey"], loading: true, loading_transactions: true )}
    else
      {:noreply, socket}
    end
  end

  # Este handle es llamado desde el app.js para indicar que se cerro la conexión con la wallet
  def handle_event("close_solana_conection", params, socket) do
    socket = socket |> PhoenixLiveSession.put_session("is_phantom_pre_connection", nil)
    {:noreply, socket |> assign(publicKey: nil, loading: false, is_phantom_pre_connection: nil, transactions: nil )}
  end

  # Este handle es llamado desde el app.js para obtener el listado de tokens para obtener iconos de los otros tokens que tenga el usuario en su wallet
  def handle_event("get_list_tokens", params, socket) do
    {:noreply, socket |> assign(list_tokens: params["data"])}
  end

  # Este handle es llamado desde el app.js para obtener información de los tokens que tiene el usuario en su wallet
  def handle_event("get_tokens_account", params, socket) do
    {:noreply, socket |> assign(tokens_account: params["data"], usdc_data: params["usdc"], solanas: params["solanas"], loading: false)}
  end

  # Este handle es llamado desde el deposit_live, para actualizar la informacion de los tokens en la wallet despues de un deposito
  def handle_info({:get_tokens_account, params}, socket) do
    {:noreply, socket |> assign(tokens_account: params["data"], usdc_data: params["usdc"], solanas: params["solanas"], loading: false)}
  end

  # Handle que maneja los eventos de los modales
  def handle_event("modal", %{"value" => value}, socket) do
    {:noreply, socket |> assign(modal: value)}
  end

  # Handle que maneja los eventos en los tab
  def handle_event("tab", %{"tab" => value}, socket) do
    socket = socket |> PhoenixLiveSession.put_session("tab", value)
    {:noreply, socket |> assign(tab: value)}
  end

  # Este handle es llamado desde el deposit_live, para actualizar el estado del deposito y actualizar la info en el modal
  def handle_info({:process_deposit, %{"step" => step, "data" => data}}, socket) do
    case step do
      "loading"     -> {:noreply, assign(socket, loading_in_modal: true)}
      "confirmed"   ->
        send(self(), {:load_transactions, socket.assigns.publicKey})
        send(self(), {:load_wallet_account, socket.assigns.publicKey})
        send(self(), :load_salsa_account)
        {:noreply, assign(socket, loading_in_modal: false, data: data, modal: "confirmed", loading_transactions: true)}
      "error"       ->
        if data == %{"code" => 4001, "message" => "User rejected the request."} do
          {:noreply, assign(socket, loading_in_modal: false, modal: "rejected")}
        else
          {:noreply, assign(socket, loading_in_modal: false, modal: "error")}
        end
      _             -> {:noreply, socket}
    end
  end


    # # Este handle es llamado desde el deposit_live, para actualizar la informacion de los tokens en la wallet despues de un deposito
  # def handle_event("claimRewards", params, socket) do
  #   {:noreply, push_event(socket, "claimRewards", %{points: 100, user: "josé"})}
  # end

  def handle_event("process_connect", %{"step" => step, "data" => data}, socket) do
    case step do
      "no_phantom"  -> {:noreply, assign(socket, loading_in_modal: false, modal: "no_phantom")}
      "error"       ->
        if data == %{"code" => 4001, "message" => "User rejected the request."} do
          {:noreply, assign(socket, loading_in_modal: false, modal: "rejected")}
        else
          {:noreply, assign(socket, loading_in_modal: false, modal: "error")}
        end
      _             -> {:noreply, socket}
    end
  end


  ### FUNCIONES UTILIZADAS PARA ACTUALZIAR VARIABLES EN SESSION
  ## https://hexdocs.pm/phoenix_live_session/PhoenixLiveSession.html#module-usage-in-liveviews

  def handle_info({:live_session_updated, session}, socket) do
    {:noreply, socket |> assign(
      is_phantom_pre_connection: Map.get(session, "is_phantom_pre_connection", []),
      )}
  end
end
