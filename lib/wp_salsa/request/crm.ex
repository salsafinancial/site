defmodule WpSalsa.Request.Crm do

  def salsa_account() do
    Neuron.Config.set(url: System.get_env("CRM"))
    Neuron.Config.set(connection_opts: [recv_timeout: 5000])
    response = Neuron.query("""
    {
      account(
        input:{
          accountId: "#{System.get_env("WALLET")}"
        }
      ){
        id
        accountId
        wallet
        status
        totalAmount
        futurePayments
        paymentsMade
        currencyCode
        registeredAt
        dashboardData
      }
    }
    """)
    case response do
      {:ok, %Neuron.Response{:body => body}} ->
        if body["data"]["account"] in [nil, ""] do
          {:error, "Internal_error"}
        else
          {:ok, body["data"]["account"]}
        end
      _ ->
        {:error, "Server_error"}
    end
  end

  def wallet_account(wallet_id) do
    Neuron.Config.set(url: System.get_env("CRM"))
    Neuron.Config.set(connection_opts: [recv_timeout: 5000])
    response = Neuron.query("""
    {
      account(
        input:{
          accountId: "#{wallet_id}"
        }
      ){
        id
        accountId
        wallet
        status
        totalAmount
        futurePayments
        paymentsMade
        currencyCode
        registeredAt
        dashboardData
      }
    }
    """)
    case response do
      {:ok, %Neuron.Response{:body => body}} ->
        cond do
          body["data"] in [nil, ""] -> {:error, "Internal_error"}
          body["data"]["account"] == nil -> {:ok, nil}
          is_map body["data"]["account"] -> {:ok, body["data"]["account"]}
          true -> {:error, "Server_error"}
        end
      _ ->
        {:error, "Server_error"}
    end
  end

  def save_deposit(tx_id, wallet_id, amount, apy, period) do
    date_today = Timex.today()
    date = Timex.shift(date_today, months: 3)
    {:ok, nextPayment} = Timex.format(date, "{YYYY}-{0M}-{0D}")
    Neuron.Config.set(url: System.get_env("CRM"))
    Neuron.Config.set(connection_opts: [recv_timeout: 5000])
    query= """
    {
      consultTransaction(
        input:{
          code: "#{tx_id}"
          accountId: "#{wallet_id}"
          sourceId: "#{wallet_id}"
          recipientId: "#{System.get_env("WALLET")}"
          amount: "#{amount}"
          currencyCode: "USDC"
          apy: #{apy}
          period: #{period}
          nextPayment: "#{nextPayment}"
        }
      ){
        status
      }
    }
    """
    IO.inspect query
    response = Neuron.query(query)
    IO.inspect response
    case response do
      {:ok, %Neuron.Response{:body => body}} ->
        if body["data"]["consultTransaction"] in [nil, ""] do
          {:error, "Internal_error"}
        else
          {:ok, body["data"]["consultTransaction"]}
        end
      _ ->
        {:error, "Server_error"}
    end
  end

  def list_transactions(wallet_id) do
    Neuron.Config.set(url: System.get_env("CRM"))
    Neuron.Config.set(connection_opts: [recv_timeout: 5000])
    query = """
    {
      transactions(
        filter:{
          accountId: "#{wallet_id}"
        }
        paginator:{
          pageSize: 100
          pageNumber: 1
        }
        orderBy:{
          listOrder: "desc"
          field: "inserted_at"
      }){
        transactions{
          id
          code
          accountId
          type
          amount
          valueType
          currencyCode
          date
          period
          nextPayment
          status
          notes
          descriptionTransfer
          sourceId
          recipientId
          apy
          rewards
          datePayment
        }
        pageInfo{
          pageNumber
          pageSize
          totalEntries
          totalPages
        }
      }
    }
    """
    response = Neuron.query(query)
    case response do
      {:ok, %Neuron.Response{:body => body}} ->
        if body["data"]["transactions"]["transactions"] in [nil, ""] do
          {:error, "Internal_error"}
        else
          {:ok, body["data"]["transactions"]["transactions"]}
        end
      _ ->
        {:error, "Server_error"}
    end
  end

end
