import React from 'react';
import { Text } from 'react-native';
import { MaterialDialog } from 'react-native-material-dialog';
import { DEFAULT_BASE_CURRENCY } from 'src/constants/currency';

const InformationModal = ({ handleHide }) =>
  <MaterialDialog
    onCancel={ handleHide }>
    <Text>
      The result is shown in { DEFAULT_BASE_CURRENCY }.
      Transactions values were converted to { DEFAULT_BASE_CURRENCY } using exchange rates received from free.currencyconverterapi.com.
    </Text>
  </MaterialDialog>;

export default InformationModal;

