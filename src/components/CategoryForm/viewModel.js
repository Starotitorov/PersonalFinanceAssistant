import {
    CATEGORY_FORM_ICON_FIELD,
    CATEGORY_FORM_NAME_FIELD,
    CATEGORY_FORM_TYPE_ID
} from './constants';
import options from './categoryFormOptions';

export const createAddCategoryViewModel = () => ({
    icon: {
        name: CATEGORY_FORM_ICON_FIELD
    },
    name: {
        name: CATEGORY_FORM_NAME_FIELD,
        label: 'Category name',
        placeholder: 'Enter category name...'
    },
    categoryTypeId: {
        name: CATEGORY_FORM_TYPE_ID,
        options: options.categoryType
    }
});

export const createEditCategoryViewModel = () => ({
    icon: {
        name: CATEGORY_FORM_ICON_FIELD
    },
    name: {
        name: CATEGORY_FORM_NAME_FIELD,
        label: 'Category name'
    }
});
