import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'src/components';
import styles from './CurrencyScreenStyles';
import { getCurrencyLine } from './helpers';

const CurrencyScreen = ({ data }) =>
  <ScrollView>
    <Card title="Exchange rates">
      {
        data.map(({ title, lines }) =>
          <View style={ styles.item }>
            <Text style={ styles.base }>{ title }</Text>
            {
              lines.map(line => <Text>{ line }</Text>)
            }
          </View>
        )
      }
    </Card>
  </ScrollView>;

export default CurrencyScreen;
