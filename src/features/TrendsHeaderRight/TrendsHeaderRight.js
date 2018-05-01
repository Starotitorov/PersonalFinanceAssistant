import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from 'src/styles';
import styles from './TrendsHeaderRightStyles';
import InformationModal from '../Trends/components/InformationModal';

const TrendsHeaderRight = ({ onPress }) =>
  <TouchableOpacity
    onPress={ onPress }>
    <Icon
      name="info"
      color={ colors.COLOR_WHITE }
      style={ styles.icon } />
    <InformationModal />
  </TouchableOpacity>;

TrendsHeaderRight.propTypes = {
  onPress: PropTypes.func
};

export default TrendsHeaderRight;
