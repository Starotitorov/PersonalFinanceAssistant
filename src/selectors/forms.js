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