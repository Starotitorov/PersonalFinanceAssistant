import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import CategoryTabs from '../CategoryTabs';
import AddCategory from '../AddCategory';
import EditCategory from '../EditCategory';
import EditCategoryHeaderRight from '../EditCategoryHeaderRight';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';

export default StackNavigator({
  CategoryTabs: {
    screen: CategoryTabs,
    navigationOptions: ({ navigation }) => ({
      title: 'Categories',
      headerLeft: <DrawerButton navigation={ navigation } />
    })
  },
  AddCategory: {
    screen: AddCategory,
    navigationOptions: {
      title: 'New category'
    }
  },
  EditCategory: {
    screen: EditCategory,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit category',
      headerRight: <EditCategoryHeaderRight navigation={ navigation } />
    })
  }
}, {
  initialRouteName: 'CategoryTabs',
  navigationOptions: getDefaultNavigationOptions()
});
