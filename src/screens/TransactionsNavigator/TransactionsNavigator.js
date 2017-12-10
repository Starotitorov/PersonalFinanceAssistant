import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import TransactionsHeaderTitle from '../TransactionsHeaderTitle';
import Transactions from '../Transactions';
import AddTransaction from '../AddTransaction';

export default StackNavigator({
    Transactions: {
        screen: Transactions,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Transactions',
                headerTitle: <TransactionsHeaderTitle />,
                headerLeft: <DrawerButton navigation={navigation} />
            }
        }
    },
    AddTransaction: {
        screen: AddTransaction,
        navigationOptions: () => {
            return {
                title: 'Add transaction',
            }
        }
    }
}, {
    initialRouteName: 'Transactions'
});
