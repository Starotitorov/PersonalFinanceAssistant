import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

const CategoriesListItem = ({
  handleSelectCategory,
  item: { name, icon, id }
}) =>
  <ListItem
    title={ name }
    titleNumberOfLines={ 5 }
    leftIcon={ icon }
    onPress={ handleSelectCategory } />;

CategoriesListItem.propTypes = {
  item: PropTypes.shape({}),
  handleSelectCategory: PropTypes.func
};

export default CategoriesListItem;
