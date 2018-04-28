import React from 'react';
import { View, Text } from 'react-native';
import styles from './TopCategoriesListStyles';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopCategoriesList = ({ categories }) =>
  <View>
    {
      categories.map(({ icon, name, sum, id, currency }, index) =>
        <View style={ styles.listItem } key={ id }>
          <View style={ styles.leftPart }>
            <Text style={ styles.position }>{ index + 1 }.</Text>
            <MaterialCommunityIcon
              style={ styles.categoryIcon }
              name={ icon ? icon : undefined } />
            <Text>{ name }</Text>
          </View>
          <Text>{ sum.toFixed(2) } { currency }</Text>
        </View>
      )
    }
  </View>;

export default TopCategoriesList;
