import R from 'ramda';

export const insert = (state, item) => {
  const { byId = {}, order = [] } = state;
  const id = item.id;

  return {
    byId: {
      ...byId,
      [id]: { id, ...item }
    },
    order: [id, ...order],
  };
};

export const insertAll = (state, items) => R.reduce(insert, state, items);

export const remove = ({ byId, order }, id) => ({
  byId: R.omit([id], byId),
  order: R.reject(R.equals(id), order),
});

export const update = (state, id, props) => {
  const { byId } = state;
  const item = byId[id];

  return item ? {
    ...state,
    byId: {
      ...byId,
      [id]: { ...item, ...props },
    },
  } : state;
};

export const replaceAll = (state, items) => insertAll({ ...state, byId: {}, order: [] }, items);
