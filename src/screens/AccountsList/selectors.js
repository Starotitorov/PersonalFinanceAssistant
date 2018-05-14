export const getAllAccounts = ({ accountsList: { accounts: { byId, order }}}) => order.map(id => byId[id]);

export const isAccountsListDataFetching = ({ accountsList: { fetching }}) => fetching;
