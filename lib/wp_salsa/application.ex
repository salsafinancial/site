defmodule WpSalsa.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      WpSalsaWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: WpSalsa.PubSub},
      # Start the Endpoint (http/https)
      WpSalsaWeb.Endpoint
      # Start a worker by calling: WpSalsa.Worker.start_link(arg)
      # {WpSalsa.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: WpSalsa.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    WpSalsaWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
