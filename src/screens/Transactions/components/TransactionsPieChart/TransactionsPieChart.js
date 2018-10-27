/*
 * TransactionsPieChart.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { View, processColor, ScrollView, RefreshControl } from 'react-native';
import { PieChart } from 'react-native-charts-wrapper';
import styles from './TransactionsPieChartStyles';
import { colors } from 'src/styles';

function TransactionsPieChart({
  description,
  data,
  legend,
  styledCenterText,
  refreshing,
  onRefresh
}) {
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={ refreshing }
          colors={ [colors.COLOR_PRIMARY] }
          onRefresh={ onRefresh } />
      }
      contentContainerStyle={ styles.container }>
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
