import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Card } from 'src/components';
import styles from './TrendsScreenStyles';
import TrendsHistogram from './components/TrendsHistogram';
import TrendsList from './components/TrendsList';
import TrendsDateRangePicker from './components/TrendsDateRangePicker';
import InformationModal from './components/InformationModal';
import TopCategoriesList from './components/TopCategoriesList';

const TransactionsScreen = ({ data, setDateRange, dateRange, data: { topIncomeCategories, topOutcomeCategories } }) =>
  <ScrollView style={ styles.container }>
    <Card>
      <TrendsDateRangePicker dateRange={ dateRange } setDateRange={ setDateRange } />
    </Card>
    <Card>
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
    <InformationModal />
  </ScrollView>;

TransactionsScreen.propTypes = {
  data: PropTypes.shape({})
};

export default TransactionsScreen;
