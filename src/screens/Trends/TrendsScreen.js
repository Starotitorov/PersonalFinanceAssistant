import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './TrendsScreenStyles';
import TrendsHistogram from './components/TrendsHistogram';

const TransactionsScreen = ({ data }) =>
  <View style={ styles.container }>
    <TrendsHistogram data={ data } />
  </View>;

TransactionsScreen.propTypes = {
  data: PropTypes.shape({})
};

export default TransactionsScreen;
