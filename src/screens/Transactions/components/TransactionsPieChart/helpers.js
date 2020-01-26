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

const COLORS = [
  processColor('#C0FF8C'),
  processColor('#FFF78C'),
  processColor('#FFD08C'),
  processColor('#8CEAFF'),
  processColor('#FF8C9D')
];

export const getPieChartConfig = ({
  values,
  totalIncomeSum,
  totalOutcomeSum,
  totalBalance,
  currency
}) => {
  const currencyText = currency ? ` ${currency}` : '';

  return {
    legend: {
      enabled: true,
      textSize: fontSizes.FONT_SIZE_M,
      form: 'CIRCLE',
      horizontalAlignment: 'RIGHT',
      verticalAlignment: 'TOP',
      orientation: 'VERTICAL',
      wordWrapEnabled: true
    },
    data: {
      dataSets: [{
        values,
        label: 'Categories',
        config: {
          colors: COLORS,
          valueTextSize: fontSizes.FONT_SIZE_M,
          valueTextColor: processColor('green'),
          sliceSpace: 4,
          selectionShift: 12,
          drawValues: false
        }
      }]
    },
    description: {
      text: `Total balance for the period: ${totalBalance.toFixed(2)}${currencyText}`,
      textSize: fontSizes.FONT_SIZE_L,
      textColor: processColor('black')
    },
    styledCenterText: {
      text: `+ ${totalIncomeSum.toFixed(2)}${currencyText}\n - ${Math.abs(totalOutcomeSum).toFixed(2)}${currencyText}`,
      color: processColor('darkgray'),
      size: fontSizes.FONT_SIZE_L
    }
  };
};
