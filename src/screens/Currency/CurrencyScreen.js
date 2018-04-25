import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import styles from './CurrencyScreenStyles';
import { getCurrencyLine } from './helpers';

const CurrencyScreen = ({ exchangeRates }) =>
  <ScrollView>
    <Card containerStyle={ styles.card } title="Exchange rates">
      {
        exchangeRates.map((entry, index) => (
          <View key={ entry[0] } style={ index !== exchangeRates.length - 1 && styles.item }>
            <Text>
              { getCurrencyLine(entry) }
            </Text>
          </View>
        ))
      }
    </Card>
  </ScrollView>;

export default CurrencyScreen;
