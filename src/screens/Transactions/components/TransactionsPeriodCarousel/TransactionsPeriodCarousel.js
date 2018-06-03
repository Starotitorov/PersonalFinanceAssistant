import React from 'react';
import { View, Text } from 'react-native';
import { colors } from 'src/styles';
import { IconButton } from 'src/components';
import styles from './TransactionsPeriodCarouselStyles';

export default function TransactionsPeriodCarousel({
  currentDate,
  onPressBack,
  onPressForward,
  disabled
}) {
  return (
    <View style={ styles.container }>
      <IconButton
        iconStyle={[styles.button, disabled && { color: colors.LIGHT_GRAY }]}
        disabled={ disabled }
        name="ios-arrow-back"
        onPress={ onPressBack } />
      <View style={ styles.periodContainer }>
        <Text style={[styles.currentDate, { color: disabled ? colors.LIGHT_GRAY : colors.COLOR_WHITE }]}>
          {currentDate}
        </Text>
      </View>
      <IconButton
        iconStyle={[styles.button, disabled && { color: colors.LIGHT_GRAY }]}
        disabled={ disabled }
        name="ios-arrow-forward"
        onPress={ onPressForward } />
    </View>
  );
}
