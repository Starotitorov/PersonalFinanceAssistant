import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { handleAddTransfer } from './actions';
import { colors } from 'src/styles';
import styles from './AccountsListHeaderRightStyles';

const AccountsListHeaderRight = ({ handleAddTransfer }) =>
  <TouchableOpacity onPress={ handleAddTransfer }>
    <Icon
      style={ styles.icon }
      color={ colors.COLOR_WHITE }
      name="compare-arrows" />
  </TouchableOpacity>;

export default connect(null, { handleAddTransfer })(AccountsListHeaderRight);
