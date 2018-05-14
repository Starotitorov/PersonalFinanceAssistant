import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ActionButton } from 'src/components';
import TransactionsPeriodCarousel from './components/TransactionsPeriodCarousel';
import TransactionsListRepresentation from './components/TransactionsListRepresentation';
import styles from './TransactionsScreenStyles';

const TransactionsScreen = ({
  currentDate,
  changeDateForward,
  changeDateBack,
  addTransaction,
  viewType,
  refreshTransactionsListData,
  refreshing,
  selectTransaction
}) =>
  <View style={ styles.container }>
    <TransactionsPeriodCarousel
      currentDate={ currentDate }
      onPressBack={ changeDateBack }
      onPressForward={ changeDateForward } />
    <TransactionsListRepresentation
      viewType={ viewType }
      onSelectTransaction={ selectTransaction } />
    <ActionButton.Button
      type={ ActionButton.types.ADD }
      onPress={ addTransaction } />
  </View>;

TransactionsScreen.propTypes = {
  currentDate: PropTypes.string,
  changeDateForward: PropTypes.func,
  changeDateBack: PropTypes.func,
  addTransaction: PropTypes.func,
  viewType: PropTypes.string,
  refreshTransactionsListData: PropTypes.func,
  refreshing: PropTypes.bool,
  selectTransaction: PropTypes.func
};

export default TransactionsScreen;
