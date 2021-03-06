/*
 * viewModel.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

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
    label: 'Category type',
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
