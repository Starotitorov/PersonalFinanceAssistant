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

import { SubmissionError } from 'redux-form';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { setAuthorizationData } from '../LogIn/actions';

export const signUp = (userData) => dispatch => api.signUp(userData)
  .then(async ({ user, token }) => {
    await dispatch(setAuthorizationData(user, token));

    dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    }));
  })
  .catch(async response => {
    let errors = {};

    try {
      const json = await response.json();
      errors = json.errors;
    } catch (e) {}

    throw new SubmissionError(errors);
  });

export const handleHaveAccount = () => dispatch => {
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'LogIn' })
    ]
  }));
};
