import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Card } from 'src/components';
import styles from './CurrencyScreenStyles';
import { getCurrencyLine } from './helpers';

const CurrencyScreen = ({ exchangeRates }) =>
  <ScrollView>
    <Card title="Exchange rates">
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
