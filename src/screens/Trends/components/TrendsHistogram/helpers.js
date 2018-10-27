/*
 * helpers.js
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

import { processColor } from 'react-native';
import { fontSizes } from 'src/styles';
import { DEFAULT_BASE_CURRENCY } from 'src/constants/currency';

export const getHistogramConfig = ({
  data: {
    income,
    outcome,
    intervals
  } = {}
}) => ({
  legend: {
    enabled: true,
    textSize: 14,
    form: 'SQUARE',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    wordWrapEnabled: true
  },
  data: {
    dataSets: [{
      values: income,
      label: 'Income',
      config: {
        drawValues: false,
        colors: [processColor('red')]
      }
    }, {
      values: outcome,
      label: 'Outcome',
      config: {
        drawValues: false,
        colors: [processColor('blue')]
      }
    }],
    config: {
      barWidth: 0.2,
      group: {
        fromX: 0,
        groupSpace: 0.2,
        barSpace: 0.2
      }
    }
  },
  description: {
    text: `Statistics for the period in ${DEFAULT_BASE_CURRENCY}`,
    textSize: fontSizes.FONT_SIZE_S
  },
  xAxis: {
    valueFormatter: intervals,
    granularityEnabled: true,
    granularity: 1,
    axisMaximum: intervals.length,
    axisMinimum: 0,
    centerAxisLabels: true
  },
  yAxis: {
    axisMinimum: 0
  }
});
