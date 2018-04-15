import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

const AccountListItem = ({
  item: { id, name, balance, icon },
  onSelectAccount
}) =>
  <ListItem
    title={ name }
    leftIcon={ icon }
    rightTitle={ balance }
    onPress={ () => onSelectAccount(id) } />;

AccountListItem.propTypes = {
  item: PropTypes.shape({}),
  onSelectAccount: PropTypes.func
};

export default AccountListItem;
