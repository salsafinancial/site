defmodule WpSalsaWeb.Router do
  use WpSalsaWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :fetch_flash
    plug :put_root_layout, {WpSalsaWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", WpSalsaWeb do
    pipe_through :browser

    # get "/", PageController, :index
    live "/", DashboardLive, :index
    #live "/about", SuiteLive, :index
    #live "/terms", SuiteLive, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", WpSalsaWeb do
  #   pipe_through :api
  # end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
end
