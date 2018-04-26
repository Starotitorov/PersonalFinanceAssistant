import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native';
import styles from './TrendsScreenStyles';
import TrendsHistogram from './components/TrendsHistogram';
import TrendsList from './components/TrendsList';
import TrendsDateRangePicker from './components/TrendsDateRangePicker';
import InformationModal from './components/InformationModal';

const TransactionsScreen = ({ data, setDateRange, dateRange }) =>
  <ScrollView style={ styles.container }>
    <Card containerStyle={ styles.card }>
      <TrendsDateRangePicker dateRange={ dateRange } setDateRange={ setDateRange } />
    </Card>
    <Card containerStyle={ styles.card }>
      <TrendsHistogram data={ data } />
    </Card>
    <Card containerStyle={ [styles.card, styles.trendsListCard] }>
      <TrendsList data={ data } />
    </Card>
    <InformationModal />
  </ScrollView>;

TransactionsScreen.propTypes = {
  data: PropTypes.shape({})
};

export default TransactionsScreen;
