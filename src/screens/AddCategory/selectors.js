import { INCOME_CATEGORY } from 'src/constants/categoryTypes';


export const getAddCategoryFormInitialValues = () => ({
  name: '',
  icon: '',
  categoryTypeId: INCOME_CATEGORY
});
