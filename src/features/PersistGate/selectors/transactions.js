export const getAllTransactions = ({
  storage: {
    transactions: {
      byId = {},
      order = []
    }
  }
}) => order.map(id => byId[id]);
