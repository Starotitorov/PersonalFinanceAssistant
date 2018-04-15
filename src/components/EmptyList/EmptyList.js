import React from 'react';
import { View, Text } from 'react-native';
import styles from './EmptyListStyles';

export default function EmptyList({ text }) {
  return (
    <View style={ styles.container }>
      <Text>{text}</Text>
    </View>
  );
}
