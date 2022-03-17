defmodule WpSalsa.Stake do
  @moduledoc """
  Module contains the schema for filters.
  """
  use Ecto.Schema
  import Ecto.Changeset
  alias WpSalsa.Stake

  schema "stake" do
    field :amount
    field :amount_range
  end

  def changeset(value, params \\ %{}) do
    cast(value, params, [:amount, :amount_range])
  end
end
