import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from 'src/styles';
import styles from './OptionItemStyles';

const OptionItem = ({
  item: { label, icon } = {},
  color = colors.COLOR_BLACK
}) =>
  <View style={ styles.itemWrapperStyle }>
    {
      icon && <Icon
        iconStyle={ styles.itemIconStyle }
        color={ color }
        name={ icon }
        type="material-community" />
    }
    <Text style={ [styles.itemTextStyle, { color }] } numberOfLines={ 1 }>{ label }</Text>
  </View>;

OptionItem.propTypes = {
  item: PropTypes.shape({}),
  color: PropTypes.string
};

export default OptionItem;
