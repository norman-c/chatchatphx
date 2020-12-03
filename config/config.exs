# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :chatchat,
  ecto_repos: [Chatchat.Repo]

# Configures the endpoint
config :chatchat, ChatchatWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "y+goRFa/sT4KOZdSumbF+WxmX7ckt18f/PdZtYUT5ul4PLshXoeJ1tVfiYA1sz5T",
  render_errors: [view: ChatchatWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Chatchat.PubSub,
  live_view: [signing_salt: "/iCEhCTz"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
