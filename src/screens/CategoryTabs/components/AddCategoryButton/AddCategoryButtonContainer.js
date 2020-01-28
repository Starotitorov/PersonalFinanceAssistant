/*
 * AddCategoryButtonContainer.js
 *
 * Copyright (c) 2020 Artsiom Staratsitarau
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

import { withHandlers, compose } from 'recompose';
import { NavigationActions, withNavigation } from 'react-navigation';
import AddCategoryButton from './AddCategoryButton';

export default compose(
  withNavigation,
  withHandlers({
    addCategory: ({ navigation }) => () => {
      navigation.dispatch(NavigationActions.navigate({
        routeName: 'AddCategory'
      }));
    }
  })
)(AddCategoryButton);
