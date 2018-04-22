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
    <View style={ styles.flexGrow }>
      <SelectInput
        value={ selectedAccountId }
        style={ styles.selectInputStyle }
        options={ accountOptions }
        onChange={ setSelectedAccount } />
    </View>
    <View style={ styles.flexGrow }>
      <SelectInput
        value={ selectedValue }
        options={ options }
        onChange={ changePeriodView } />
    </View>
  </View>;

export default TransactionsHeaderTitle;
