/*
 * AddTransferScreenContainer.js
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

import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import { addTransfer, setAccounts } from './actions';
import { getAddTransferFormOptions } from './selectors';
import AddTransferScreen from './AddTransferScreen';

const withSetAddTransferData = lifecycle({
  componentDidMount() {
    const { navigation: { state: { params: { accounts }}}, setAccounts } = this.props;

    setAccounts(accounts);
  }
});

const mapStateToProps = state => ({
  options: getAddTransferFormOptions(state)
});

export default compose(
  connect(mapStateToProps, { addTransfer, setAccounts }),
  withSetAddTransferData,
  withHandlers({
    addTransfer: ({ addTransfer, navigation }) => transferData => addTransfer({ navigation, transferData })
  })
)(AddTransferScreen);
