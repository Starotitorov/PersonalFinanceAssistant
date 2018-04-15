import { INCOME_CATEGORY } from 'src/constants/categoryTypes';

export const getEditCategoryFormInitialValues = ({
  editCategory: {
    category: {
      name = '',
      icon,
      categoryTypeId = INCOME_CATEGORY
    }
  }
} = {}) => ({
  name,
  icon,
  categoryTypeId
});

export const isCategoryFetching = ({
  editCategory: {
    fetching
  }
}) => fetching;
