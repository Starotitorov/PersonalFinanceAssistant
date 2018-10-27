/*
 * withNetwork.js
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

import { withHandlers, lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { NetInfo } from 'react-native';
import { setConnectionInfo } from './actions';

const withHandleConnectionChange = withHandlers({
  handleConnectionChange: ({ setConnectionInfo }) => connectionInfo => setConnectionInfo(connectionInfo)
});

const withLifecycle = lifecycle({
  componentDidMount() {
    NetInfo.getConnectionInfo()
      .then(this.props.handleConnectionChange);

    NetInfo.addEventListener(
      'connectionChange',
      this.props.handleConnectionChange
    );
  },
  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.props.handleConnectionChange
    );
  }
});

export default compose(
  connect(null, { setConnectionInfo }),
  withHandleConnectionChange,
  withLifecycle
);
