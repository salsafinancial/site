use Mix.Config

#En la siguiente linea configurar un puerto que este disponible.
port = String.to_integer(System.get_env("PORT") || "3100")
default_secret_key_base = :crypto.strong_rand_bytes(43) |> Base.encode64

config :wp_salsa, WpSalsaWeb.Endpoint,
  http: [port: port],
  url: [host: "localhost", port: port],
  secret_key_base: System.get_env("SECRET_KEY_BASE") || default_secret_key_base
