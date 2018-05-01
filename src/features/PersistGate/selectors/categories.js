export const getAllCategories = ({
  storage: {
    categories: {
      byId,
      order
    }
  }
}) => order.map(id => byId[id]);
