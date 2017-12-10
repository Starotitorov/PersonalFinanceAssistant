export const getAllAccounts = ({ accounts: { byId, order }}) =>
    order.map(id => byId[id]);

export const getSelectedAccount = ({ accounts: { selected, byId } }) => byId[selected];

export const isAccountsFetching = ({ accounts: { fetching } }) => fetching;

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
