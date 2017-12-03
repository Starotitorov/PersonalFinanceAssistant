import { INCOME_CATEGORY } from 'src/constants/categoryTypes';
import icons from 'src/constants/icons';

export const getCategoryFormInitialValues = ({
    name = '',
    icon = icons[0],
    categoryType = INCOME_CATEGORY
} = {}) => {
    return {
        name,
        icon,
        categoryType
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
