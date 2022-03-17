# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# Configures the endpoint
config :wp_salsa, WpSalsaWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "03Fgnjd7zHk5Jl6MZXrKBn50aqPl+iKoh3ztmlU8o3S4HijPSRdXpS27K6JQgchX",
  render_errors: [view: WpSalsaWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: WpSalsa.PubSub,
  api_crm: System.get_env("CRM"),
  live_view: [signing_salt: "O6vvt+aN"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
