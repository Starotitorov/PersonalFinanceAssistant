import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

const AccountListItem = ({
  handleSelectAccount,
  item: { id, name, balance, icon }
}) =>
  <ListItem
    title={ name }
    leftIcon={ icon }
    rightTitle={ balance }
    onPress={ handleSelectAccount } />;

AccountListItem.propTypes = {
  item: PropTypes.shape({}),
  handleSelectAccount: PropTypes.func
};

export default AccountListItem;
