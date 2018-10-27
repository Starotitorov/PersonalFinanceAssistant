/*
 * AppView.js
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

import { lifecycle, compose, withProps, withHandlers } from 'recompose';
import { addNavigationHelpers } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import {
  withLoadingIndicator,
  withNetwork
} from 'src/components';
import App from './App';

const withCurrentUser = lifecycle({
  componentDidMount() {
    this.props.getCurrentUser();
  }
});

const withHandleSplashScreen = lifecycle({
  componentDidMount() {
    SplashScreen.hide();
  }
});

const withNavigation = withProps(({ dispatch, navigationState }) => ({
  navigation: addNavigationHelpers({
    dispatch,
    state: navigationState
  })
}));

const withToast = withHandlers(() => {
  let toast;

  return {
    setToastRef: () => el => {
      toast = el;
    },
    openToast: () => () => {
      toast.show('You are not connected to the Internet.');
    },
    closeToast: () => () => {
      toast && toast.close();
    }
  };
});

const withConnectionInfoMessage = lifecycle({
  componentWillReceiveProps(nextProps) {
    nextProps.isConnected ? this.props.closeToast() : this.props.openToast();
  }
});

export default compose(
  withHandleSplashScreen,
  withNetwork,
  withCurrentUser,
  withLoadingIndicator,
  withNavigation,
  withToast,
  withConnectionInfoMessage
)(App);
