/*
 * TransferFormView.js
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

import { reduxForm } from 'redux-form';
import { withProps, compose, withHandlers } from 'recompose';
import moment from 'moment';
import { TRANSFER_FORM } from './constants';
import TransferForm from './TransferForm';
import validate from './validate';
import { createAddTransferViewModel } from './viewModel';
import { getInitialValues } from './helpers';

const withViewModel = withProps(({ options }) => ({
  viewModel: createAddTransferViewModel(options)
}));

export default compose(
  withHandlers({
    onSubmit: ({ onSubmit }) => data =>
      onSubmit({
        ...data,
        value: Number(data.value),
        date: moment(data.date).startOf('day').toISOString()
      })
  }),
  reduxForm({
    form: TRANSFER_FORM,
    initialValues: getInitialValues(),
    validate
  }),
  withViewModel
)(TransferForm);
