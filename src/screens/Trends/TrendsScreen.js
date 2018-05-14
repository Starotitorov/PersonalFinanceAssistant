import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card } from 'src/components';
import styles from './TrendsScreenStyles';
import TrendsScreenInner from './components/TrendsScreenInner';
import TrendsDateRangePicker from './components/TrendsDateRangePicker';
import InformationModal from './components/InformationModal';

const TransactionsScreen = ({
  data,
  dateRange,
  handleGetData,
  isTrendsDataFetching,
  fetchTrendsData
}) =>
  <ScrollView style={ styles.container }>
    <Card>
      <TrendsDateRangePicker handleGetData={ handleGetData } dateRange={ dateRange } />
    </Card>
    <View style={ styles.innerContainer }>
      <TrendsScreenInner data={ data } isLoading={ isTrendsDataFetching } />
    </View>
    <InformationModal />
  </ScrollView>;

export default TransactionsScreen;
