/*
 * alerts.js
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

import { Alert } from 'react-native';
import RNExitApp from 'react-native-exit-app';

export const showFacebookLoginErrorAlert = (error) => {
  Alert.alert(
    'Facebook login',
    `Facebook login has error: ${error}`,
    [
      { text: 'OK' }
    ]
  );
};

export const showFacebookLoginCancelledAlert = () => {
  Alert.alert(
    'Facebook login',
    'Facebook login is cancelled',
    [
      { text: 'OK' }
    ]
  );
};

export const showFatalErrorAlert = () => {
  Alert.alert(
    'Unexpected error occurred',
    'Please close the app and start again!',
    [
      {
        text: 'Close',
        onPress: RNExitApp.exitApp
      }
    ],
    { cancelable: false }
  );
};

export const showNetworkErrorAlert = () => {
  Alert.alert(
    'Network error',
    'You are not connected to the internet, try again later.',
    [
      {
        text: 'OK'
      }
    ]
  );
};

export const showCanNotPerformOperationAlert = () => {
  Alert.alert(
    'Operation error',
    'Cannot perform operation. Try again later.',
    [
      {
        text: 'OK'
      }
    ]
  );
};

export const showTrendsInstructionsAlert = () => {
  Alert.alert(
    null,
    'The result is shown in BYN.' +
    ' Transactions values were converted to BYN using exchange rates received from free.currencyconverterapi.com.',
    [
      {
        text: 'OK'
      }
    ]
  );
};
