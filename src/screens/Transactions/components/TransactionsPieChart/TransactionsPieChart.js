import React from 'react';
import { View, processColor, ScrollView } from 'react-native';
import { PieChart } from 'react-native-charts-wrapper';
import styles from './TransactionsPieChartStyles';

function TransactionsPieChart({
  description,
  data,
  legend,
  styledCenterText
}) {
  return (
    <ScrollView contentContainerStyle={ styles.container }>
      <View style={ styles.view }>
        <PieChart
          style={ styles.chart }
          logEnabled
          chartBackgroundColor={ processColor('#fff') }
          chartDescription={ description }
          data={ data }
          legend={ legend }

          entryLabelColor={ processColor('black') }
          entryLabelTextSize={ 20 }

          rotationEnabled
          rotationAngle={ 45 }
          drawSliceText
          usePercentValues
          styledCenterText={ styledCenterText }
          centerTextRadiusPercent={ 100 }
          holeRadius={ 40 }
          holeColor={ processColor('#f0f0f0') }
          transparentCircleRadius={ 45 }
          transparentCircleColor={ processColor('#f0f0f088') }
          maxAngle={ 360 } />
      </View>
    </ScrollView>
  );
}

export default TransactionsPieChart;
