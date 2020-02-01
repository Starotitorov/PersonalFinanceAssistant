/*
 * actions.js
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

import { NavigationActions, StackActions } from 'react-navigation';
import get from 'lodash/get';
import * as api from 'src/api';
import { alerts } from 'src/utils';
import { OUTCOME_CATEGORY } from '../../constants/categoryTypes';
import {
  OUTCOME_CATEGORIES_ROUTE_NAME,
  INCOME_CATEGORIES_ROUTE_NAME
} from '../CategoryTabs/constants';

export const removeCategory = ({ navigation, id }) => () => {
  const categoryTypeId = get(navigation, 'state.params.category.categoryTypeId');

  return api.removeCategory(id)
    .then(() => {
      navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'CategoryTabs',
            action: NavigationActions.navigate({
              routeName: categoryTypeId === OUTCOME_CATEGORY
                ? OUTCOME_CATEGORIES_ROUTE_NAME
                : INCOME_CATEGORIES_ROUTE_NAME
            })
          })
        ]
      }));
    })
    .catch(() => alerts.showCanNotPerformOperationAlert());
};
