/*
 * reducer.js
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

import { AppRouter } from 'src/screens/AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = AppRouter.getStateForAction(AppRouter.getStateForAction(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Home'
    })
  ]
})));

const navigation = (state = initialState, action) => {
  const nextState = AppRouter.getStateForAction(action, state);

  return nextState || state;
};

export default navigation;
