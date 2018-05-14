import React from 'react';
import { View } from 'react-native';
import { Card } from 'src/components';
import styles from './TrendsScreenInnerStyles';
import TrendsHistogram from '../TrendsHistogram';
import TrendsList from '../TrendsList';
import TopCategoriesList from '../TopCategoriesList';

const TrendsScreenInner = ({ data, data: { topIncomeCategories, topOutcomeCategories } }) =>
  <View>
    <Card containerStyle={ styles.histogramCard }>
      <TrendsHistogram data={ data } />
    </Card>
    <Card title="Statistics">
      <TrendsList data={ data } />
    </Card>
    {
      topOutcomeCategories.length > 0 &&
      <Card titleStyle={ styles.outcomeTitle } title="Top outcome categories">
        <TopCategoriesList categories={ topOutcomeCategories } />
      </Card>
    }
    {
      topIncomeCategories.length > 0 &&
      <Card titleStyle={ styles.incomeTitle } title="Top income categories">
        <TopCategoriesList categories={topIncomeCategories}/>
      </Card>
    }
  </View>;

export default TrendsScreenInner;
