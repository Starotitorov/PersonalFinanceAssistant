export const getInitialValues = ({ accounts: { byId, selected } }) => {
    if (!selected || !byId[selected]) {
        return {
            name: null,
            initialDate: null
        };
    }

    const { name, initialDate } = byId[selected];

    return {
        name,
        initialDate
    };
};
