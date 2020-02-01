/*
 * selectors.js
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

import get from 'lodash/get';
import { INCOME_CATEGORY, OUTCOME_CATEGORY } from 'src/constants/categoryTypes';
import { INCOME_CATEGORIES_ROUTE_NAME } from '../CategoryTabs/constants';

export const getAddCategoryFormInitialValues = (state, ownProps) => {
  const activeTab = get(
    ownProps,
    'navigation.state.params.activeTab',
    INCOME_CATEGORIES_ROUTE_NAME
  );

  return {
    name: '',
    icon: '',
    categoryTypeId: activeTab === INCOME_CATEGORIES_ROUTE_NAME
      ? INCOME_CATEGORY
      : OUTCOME_CATEGORY
  };
};
