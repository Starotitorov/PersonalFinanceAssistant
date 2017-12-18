import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import Currency from '../Currency';

export default StackNavigator({
    Currency: {
        screen: Currency,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Currency',
                headerLeft: <DrawerButton navigation={navigation} />
            }
        }
    }
}, {
    initialRouteName: 'Currency'
});
