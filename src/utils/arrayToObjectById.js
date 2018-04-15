const arrayToObjectById = array =>
  array.reduce(({ byId, order }, item) => ({
    byId: {
      ...byId,
      [item.id]: item
    },
    order: [...order, item.id]
  }), { byId: {}, order: []});

export default arrayToObjectById;
