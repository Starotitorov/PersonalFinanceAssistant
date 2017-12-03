export const getAllAccounts = ({ accounts: { byId, order }}) =>
    order.map(id => byId[id]);

export const getSelectedAccount = ({ accounts: { selected, byId } }) => byId[selected];

export const isAccountsFetching = ({ accounts: { fetching } }) => fetching;
