defmodule WpSalsaWeb.DashboardView do
  use WpSalsaWeb, :view

  def get_icon_token(address, amount, list_tokens, socket) do
    if list_tokens != nil do
      token = Enum.filter(list_tokens, fn t -> t["address"] == address end)
      if length(token) > 0 do
        {Enum.at(token, 0)["logoURI"], "You have #{amount} #{Enum.at(token, 0)["symbol"]}"}
      else
        {nil, nil}
      end
    else
      {nil, nil}
    end
  end

  def format_date(date) do
    if date == nil do
      ""
    else
      date = parse_date(date)
      date_today = Timex.today()
      year = if date_today.year == date.year do "" else " #{date.year}" end
      month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] |> Enum.at(date.month - 1)
      "#{date.day} #{month}#{year}"
    end
  end


  def remaining_days(date_1, date_2) do
    date_1 = parse_date(date_1)
    date_2 = parse_date(date_2)
    Timex.diff(date_2, date_1, :days)
  end

  def format_data_chart(data, type) do
    if is_nil(data) do
      nil
    else
      for i <- (length(data) - 1)..0 do
        coef_exp_sing_to_integer(Enum.at(data, i)[type]) end
    end
  end

  def list_balance_chart(data) do
    if is_nil(data) do
      nil
    else
      for i <- (length(data) - 1)..0 do
        coef_exp_sing_to_integer(Enum.at(data, i)["payments_made"]) + coef_exp_sing_to_integer(Enum.at(data, i)["future_payments"])
      end
    end
  end

  def get_labels_dashboard(data) do
    for i <- (length(data) - 1)..0 do
      date_for_dashboard(Enum.at(data, i)["date"])
    end
  end

  defp date_for_dashboard(value) do
    {{year_today, month_today, day_today}, _} = :calendar.local_time()
    split_data = String.split(value, "-")
    year = if "#{year_today}" == Enum.at(split_data, 0) do "" else "#{year_today}" end
    month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] |> Enum.at((Integer.parse(Enum.at(split_data, 1)) |> elem(0)) - 1)
    date = "#{Enum.at(split_data, 2)} #{month} #{year}"
    if value == "#{year_today}-#{if month_today < 10 do "0#{month_today}" else month_today end}-#{if day_today < 10 do "0#{day_today}" else day_today end}" do "Hoy" else date end
  end

  defp parse_date(date) do
    Timex.parse!((String.split(date, "T") |> Enum.at(0)), "{YYYY}-{0M}-{0D}")
  end

  defp coef_exp_sing_to_integer(map) do
    if nil in [map["coef"], map["sign"], map["exp"]] do
      0.00
    else
      ((map["coef"] * map["sign"]) * :math.pow(10, map["exp"]))
    end
  end

end
