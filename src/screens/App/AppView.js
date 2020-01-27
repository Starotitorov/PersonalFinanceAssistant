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

import { lifecycle, compose, withHandlers } from 'recompose';
import {
  withNetwork
} from 'src/components';
import App from './App';

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
  componentDidUpdate() {
    const { isConnected, closeToast, openToast } = this.props;

    if (isConnected) {
      closeToast();
    } else {
      openToast();
    }
  }
});

export default compose(
  withNetwork,
  withToast,
  withConnectionInfoMessage
)(App);
