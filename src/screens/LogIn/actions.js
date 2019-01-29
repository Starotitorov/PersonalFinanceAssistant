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

import { createAction } from 'redux-actions';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as asyncStorageKeys from 'src/constants/asyncStorage';
import * as api from 'src/api';
import { navigationService } from '../../services';

export const setCurrentUser = createAction(
  'AUTHORIZATION/SET_CURRENT_USER',
  user => ({ user })
);
export const setToken = createAction(
  'AUTHORIZATION/SET_TOKEN',
  token => ({ token })
);

export const resetCurrentUser = createAction('AUTHORIZATION/RESET_CURRENT_USER');

export const fetchCurrentUserStart = createAction('AUTHORIZATION/FETCH_CURRENT_USER_START');
export const fetchCurrentUserFinish = createAction('AUTHORIZATION/FETCH_CURRENT_USER_FINISH');

export const setAuthorizationData = (user, token) => dispatch => {
  dispatch(setCurrentUser(user));

  dispatch(setToken(token));
};

export const logIn = ({ email, password }) => dispatch => api.signIn(email, password)
  .then(async ({ user, token }) => {
    await dispatch(setAuthorizationData(user, token));

    navigationService.navigateToTransactionsScreen();
  })
  .catch(async response => {
    let error = 'Unknown error';

    try {
      const json = await response.json();
      error = json.error;
    } catch (e) {}

    Alert.alert(null, error);
  });

export const logInFacebook = data => dispatch => api.logInFacebook(data)
  .then(async ({ user, token }) => {
    await dispatch(setAuthorizationData(user, token));

    navigationService.navigateToTransactionsScreen();
  });

export const getCurrentUser = ({ navigation }) => async dispatch => {
  dispatch(fetchCurrentUserStart());

  let user = null;
  let token = null;
  try {
    const userObject = await AsyncStorage.getItem(asyncStorageKeys.USER_KEY);
    const tokenObject = await AsyncStorage.getItem(asyncStorageKeys.TOKEN_KEY);

    user = JSON.parse(userObject);
    token = JSON.parse(tokenObject);
  } catch (e) {
  }

  dispatch(setAuthorizationData(user, token));

  dispatch(fetchCurrentUserFinish());

  navigation.navigate(!user || !token ? 'Auth' : 'App');
};
