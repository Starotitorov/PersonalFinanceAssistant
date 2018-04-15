import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SelectInput } from 'src/components';
import styles from './TrendsHeaderTitleStyles';

const TrendsHeaderTitle = ({
  accountOptions,
  selectedAccountId,
  setSelectedAccount
}) =>
  <View style={ styles.container }>
    <SelectInput
      value={ selectedAccountId }
      options={ accountOptions }
      onChange={ setSelectedAccount } />
  </View>;

TrendsHeaderTitle.propTypes = {
  accountOptions: PropTypes.arrayOf(PropTypes.shape({})),
  selectedAccountId: PropTypes.number,
  setSelectedAccount: PropTypes.func
};

export default TrendsHeaderTitle;
