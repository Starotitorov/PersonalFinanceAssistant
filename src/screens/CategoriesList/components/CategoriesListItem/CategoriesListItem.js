import React from 'react';
import PropTypes from 'prop-types'
import { ListItem } from 'react-native-elements';

const CategoriesListItem = ({
    item: { name, icon, id },
    onSelectCategory
}) =>
    <ListItem
        title={name}
        leftIcon={icon}
        onPress={() => onSelectCategory(id)}
    />

CategoriesListItem.propTypes = {
    item: PropTypes.shape({}),
    onSelectCategory: PropTypes.func
};

export default CategoriesListItem;
