/*
 * CategoriesTabNavigator.js
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

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import OutcomeCategoriesList from '../OutcomeCategoriesList';
import IncomeCategoriesList from '../IncomeCategoriesList';
import { colors } from 'src/styles';
import {
  INCOME_CATEGORIES_ROUTE_NAME,
  OUTCOME_CATEGORIES_ROUTE_NAME
} from './constants';

export default createMaterialTopTabNavigator({
  [INCOME_CATEGORIES_ROUTE_NAME]: {
    screen: IncomeCategoriesList,
    navigationOptions: {
      tabBarLabel: 'Income'
    }
  },
  [OUTCOME_CATEGORIES_ROUTE_NAME]: {
    screen: OutcomeCategoriesList,
    navigationOptions: {
      tabBarLabel: 'Expense'
    }
  }
}, {
  initialRouteName: INCOME_CATEGORIES_ROUTE_NAME,
  swipeEnabled: true,
  tabBarPosition: 'top',
  tabBarOptions: {
    style: {
      backgroundColor: colors.COLOR_PRIMARY
    }
  }
});
