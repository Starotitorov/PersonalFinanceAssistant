export const getSelectInputOptionsFromAllAccounts = state => {
    const { addTransfer: { accounts }} = state;

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

export const getAddTransferFormOptions = state => {
    return {
        accounts: getSelectInputOptionsFromAllAccounts(state)
    };
};

export const isAddTransferDataFetching = ({
    addTransfer: {
        fetching
    }
}) => fetching;
