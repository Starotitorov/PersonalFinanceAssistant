/*
 * CalculatorModal.js
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
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Calculator from '../Calculator';

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0
  }
});

const CalculatorModal = ({ value, show, onSubmit }) => (
  <Modal style={ styles.modalStyle } isVisible={ show }>
    <Calculator value={ value } onSubmit={ onSubmit } />
  </Modal>
);

CalculatorModal.propTypes = {
  value: PropTypes.number,
  onSubmit: PropTypes.func,
  show: PropTypes.bool
};

export default CalculatorModal;
