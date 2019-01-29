/*
 * InformationModal.js
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

import React from 'react';
import { Text } from 'react-native';
import { MaterialDialog } from 'react-native-material-dialog';
import { DEFAULT_BASE_CURRENCY } from 'src/constants/currency';

import styles from './InformationModalStyles';

const InformationModal = ({ handleHide }) =>
  <MaterialDialog
    onCancel={ handleHide }>
    <Text style={ styles.message }>
      The results are shown in { DEFAULT_BASE_CURRENCY }.
      Transaction values were converted to { DEFAULT_BASE_CURRENCY } using
      exchange rates received from the free.currencyconverterapi.com.
    </Text>
  </MaterialDialog>;

export default InformationModal;

