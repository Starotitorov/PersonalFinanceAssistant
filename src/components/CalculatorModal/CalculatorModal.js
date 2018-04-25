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
