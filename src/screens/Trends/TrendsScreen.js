import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native';
import styles from './TrendsScreenStyles';
import TrendsHistogram from './components/TrendsHistogram';
import TrendsList from './components/TrendsList';
import TrendsDateRangePicker from './components/TrendsDateRangePicker';

const TransactionsScreen = ({ data, setDateRange, dateRange }) =>
  <ScrollView style={ styles.container }>
    <Card>
      <TrendsDateRangePicker dateRange={ dateRange } setDateRange={ setDateRange } />
    </Card>
    <Card>
      <TrendsHistogram data={ data } />
    </Card>
    <Card containerStyle={ styles.trendsListCard }>
      <TrendsList data={ data } />
    </Card>
  </ScrollView>;

TransactionsScreen.propTypes = {
  data: PropTypes.shape({})
};

export default TransactionsScreen;
