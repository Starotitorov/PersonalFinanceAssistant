export const getEditAccountFormInitialValues = ({
    editAccount: {
        account: {
            name,
            icon,
            initialDate
        } = {}
    }
}) => {
    return {
        icon,
        name,
        initialDate
    };
};

export const isAccountFetching = ({
    editAccount: {
        fetching
    }
}) => fetching
