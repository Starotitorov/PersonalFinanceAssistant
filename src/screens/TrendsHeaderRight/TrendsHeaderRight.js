import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from 'src/styles';
import styles from './TrendsHeaderRightStyles';

const TrendsHeaderRight = ({ onPress }) =>
  <TouchableOpacity
    onPress={ onPress }>
    <Icon
      name="info"
      color={ colors.COLOR_WHITE }
      style={ styles.icon } />
  </TouchableOpacity>;

TrendsHeaderRight.propTypes = {
  onPress: PropTypes.func
};

export default TrendsHeaderRight;
