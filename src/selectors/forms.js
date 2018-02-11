import { INCOME_CATEGORY } from 'src/constants/categoryTypes';
import { getSelectInputOptionsFromAllAccounts } from 'src/selectors/accounts';
import { getSelectInputOptionsFromAllCategories } from 'src/selectors/categories';


export const getCategoryFormInitialValues = ({
    name = '',
    icon,
    categoryTypeId = INCOME_CATEGORY
} = {}) => {
    return {
        name,
        icon,
        categoryTypeId
    };
};

export const getEditAccountFormInitialValues = ({ accounts: {byId, selected} }) => {
    if (!selected || !byId[selected]) {
        return {
            name: null,
            icon: null,
            initialDate: null
        };
    }

    const { name, icon, initialDate } = byId[selected];

    return {
        icon,
        name,
        initialDate
    };
};

export const getTransferFormOptions = state => {
    return {
        accounts: getSelectInputOptionsFromAllAccounts(state)
    };
};

export const getTransactionFormOptions = state => {
    return {
        accounts: getSelectInputOptionsFromAllAccounts(state),
        categories: getSelectInputOptionsFromAllCategories(state)
    };
};
