import {
  CATEGORY_FORM_ICON_FIELD,
  CATEGORY_FORM_NAME_FIELD,
  CATEGORY_FORM_TYPE_ID
} from './constants';
import options from './categoryFormOptions';
import icons from 'src/constants/categoryIcons';

export const createAddCategoryViewModel = () => ({
  icon: {
    name: CATEGORY_FORM_ICON_FIELD,
    icons
  },
  name: {
    name: CATEGORY_FORM_NAME_FIELD,
    label: 'Category name',
    placeholder: 'Enter category name...'
  },
  categoryTypeId: {
    name: CATEGORY_FORM_TYPE_ID,
    label: 'Category type',
    options: options.categoryType
  }
});

export const createEditCategoryViewModel = () => ({
  icon: {
    name: CATEGORY_FORM_ICON_FIELD,
    icons
  },
  name: {
    name: CATEGORY_FORM_NAME_FIELD,
    label: 'Category name'
  }
});
