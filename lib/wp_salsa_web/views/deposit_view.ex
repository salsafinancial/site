defmodule WpSalsaWeb.DepositView do
  use WpSalsaWeb, :view


  def date_claimable(months) do
    date_today = Timex.today()
    date = Timex.shift(date_today, months: months)
    year = if date_today.year == date.year do "" else " #{date.year}" end
    month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] |> Enum.at(date.month - 1)
    "#{date.day} #{month}#{year}"
  end

  def get_rewards_in_time_period(i, months, value) do
    if months == 0 do
      0
    else
      interes_rate = if months == 12 do i/100 else (i/100)*(months/12) end
      :erlang.float_to_binary(value * interes_rate, [decimals: 8])
    end
  end
end
