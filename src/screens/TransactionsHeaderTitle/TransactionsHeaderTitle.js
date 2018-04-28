import React from 'react';
import { View } from 'react-native';
import { SelectInput } from 'src/components';
import options from './options';
import styles from './TransactionsHeaderTitleStyles';

const TransactionsHeaderTitle = ({
  changePeriodView,
  selectedValue,
  accountOptions,
  selectedAccountId,
  setSelectedAccount
}) =>
  <View style={ styles.container }>
    <View style={ styles.accountSelectInput }>
      <SelectInput
        value={ selectedAccountId }
        options={ accountOptions }
        onChange={ setSelectedAccount } />
    </View>
    <View style={ styles.periodTypeSelectInput }>
      <SelectInput
        value={ selectedValue }
        options={ options }
        onChange={ changePeriodView } />
    </View>
  </View>;

export default TransactionsHeaderTitle;
