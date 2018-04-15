import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';
import styles from './TrendsHistogramStyles';

const TrendsHistogram = ({ legend, data, xAxis, description }) =>
  <View style={ styles.container }>
    <BarChart
      style={ styles.chart }
      xAxis={ xAxis }
      data={ data }
      legend={ legend }
      chartDescription={ description }
      drawValueAboveBar={ false } />
  </View>;

export default TrendsHistogram;
