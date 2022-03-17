defmodule ConfigUtilities do
  @moduledoc """
  The config Utilities is used to get variables from the project configuration
  """

  @doc """
  The function return the variable inside the config, using the name and the identifiers inside the config file
  """
  def get_var_config(variable_name, config_name, key, default \\ nil) do
    Keyword.get(config(variable_name, config_name), key, default)
  end

  @doc """
  Search the config inside the config file, using the variable name and the config name
  """
  def config(variable_name, config_name) do
    Application.get_env(variable_name, config_name)
  end


end
