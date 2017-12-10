import { INCOME_CATEGORY } from 'src/constants/categoryTypes';
import icons from 'src/constants/icons';
import { values } from 'lodash';

export const getCategoryFormInitialValues = ({
    name = '',
    icon = icons[0],
    categoryTypeId = INCOME_CATEGORY
} = {}) => {
    return {
        name,
        icon,
        categoryTypeId
    };
};

export const getEditAccountFormInitialValues = ({ accounts: { byId, selected } }) => {
    if (!selected || !byId[selected]) {
        return {
            name: null,
            icon: icons[0],
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
        accounts: values(state.accounts.byId).map(({ name, id }) => ({
            value: id,
            label: name
        }))
    };
};

export const getTransactionFormOptions = state => {
    return {
        accounts: values(state.accounts.byId).map(({ name, id }) => ({
            value: id,
            label: name
        })),
        categories: values(state.categories.byId).map(({ name, id }) => ({
            value: id,
            label: name
        }))
    };
};
