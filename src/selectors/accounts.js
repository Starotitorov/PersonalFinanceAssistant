export const getAllAccounts = ({ accounts: { byId, order }}) =>
    order.map(id => byId[id]);

export const getSelectedAccount = ({ accounts: { selected, byId } }) => byId[selected];

export const isAccountsFetching = ({ accounts: { fetching } }) => fetching;

export const isAccountsRefreshing = ({ accounts: { refreshing } }) => refreshing;

export const getSelectInputOptionsFromAllAccounts = state => {
    const accounts = getAllAccounts(state);

    const accountOptions = [{
        label: 'Select account...',
        value: null
    }];

    return accountOptions.concat(
        accounts.map(({ name, id })=> ({
            label: name,
            value: id
        }))
    );
};

export const isSameCurrency = (state, fromAccountId, toAccountId) => {
    if (!fromAccountId || !toAccountId) {
        return true;
    }

    const { accounts: { byId: accounts } } = state;

    return accounts[fromAccountId].currency === accounts[toAccountId].currency;
};
