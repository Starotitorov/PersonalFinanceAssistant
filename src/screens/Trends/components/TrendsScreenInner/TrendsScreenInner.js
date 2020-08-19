/*
 * TrendsScreenInner.js
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
import { View } from 'react-native';
import { Card } from 'src/components';
import styles from './TrendsScreenInnerStyles';
import TrendsHistogram from '../TrendsHistogram';
import TrendsList from '../TrendsList';
import TopCategoriesList from '../TopCategoriesList';

const TrendsScreenInner = ({ data, data: { topIncomeCategories, topOutcomeCategories }}) =>
  <View style={ styles.container }>
    <Card containerStyle={ styles.histogramCard }>
      <TrendsHistogram data={ data } />
    </Card>
    <Card title="Statistics">
      <TrendsList data={ data } />
    </Card>
    {
      topOutcomeCategories.length > 0 &&
      <Card titleStyle={ styles.outcomeTitle } title="Top expense categories">
        <TopCategoriesList categories={ topOutcomeCategories } />
      </Card>
    }
    {
      topIncomeCategories.length > 0 &&
      <Card titleStyle={ styles.incomeTitle } title="Top income categories">
        <TopCategoriesList categories={ topIncomeCategories } />
      </Card>
    }
  </View>;

export default TrendsScreenInner;
