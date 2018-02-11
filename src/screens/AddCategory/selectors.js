import { INCOME_CATEGORY } from 'src/constants/categoryTypes';


export const getAddCategoryFormInitialValues = () => {
    return {
        name:'',
        icon: '',
        categoryTypeId: INCOME_CATEGORY
    };
};
