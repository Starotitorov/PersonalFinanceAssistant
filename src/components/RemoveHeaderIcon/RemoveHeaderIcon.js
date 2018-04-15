import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from 'src/styles';
import styles from './RemoveHeaderIconStyles';

const RemoveIcon = ({ onPress }) =>
  <TouchableOpacity
    onPress={ onPress }>
    <Icon
      name="delete"
      color={ colors.COLOR_WHITE }
      style={ styles.icon } />
  </TouchableOpacity>;

export default RemoveIcon;
