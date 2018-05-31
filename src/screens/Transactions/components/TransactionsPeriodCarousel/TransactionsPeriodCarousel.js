import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'src/components';
import styles from './TransactionsPeriodCarouselStyles';

export default function TransactionsPeriodCarousel({
  currentDate,
  onPressBack,
  onPressForward,
  disabled
}) {
  return (
    <View style={ styles.container } pointerEvents={ disabled ? 'none' : 'auto' }>
      <IconButton
        iconStyle={ styles.button }
        name="ios-arrow-back"
        onPress={ onPressBack } />
      <View style={ styles.periodContainer }>
        <Text style={ styles.currentDate }>{currentDate}</Text>
      </View>
      <IconButton
        iconStyle={ styles.button }
        name="ios-arrow-forward"
        onPress={ onPressForward } />
    </View>
  );
}
