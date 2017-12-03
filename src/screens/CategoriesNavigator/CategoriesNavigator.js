import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton, LogOutIcon } from 'src/components'
import CategoryTabs from '../CategoryTabs';
import AddCategory from '../AddCategory';

export default StackNavigator({
    CategoryTabs: {
        screen: CategoryTabs,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Categories',
                headerLeft: <DrawerButton navigation={navigation} />,
                headerRight: <LogOutIcon />
            }
        }
    },
    AddCategory: {
        screen: AddCategory,
        navigationOptions: {
            title: 'New category'
        }
    },
}, {
    initialRouteName: 'CategoryTabs'
});
