import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import TransactionsHeaderTitle from '../TransactionsHeaderTitle';
import Transactions from '../Transactions';
import SwitchViewTypeIcon from '../Transactions/components/SwitchViewTypeIcon';
import AddTransaction from '../AddTransaction';
import EditTransaction from '../EditTransaction';
import EditTransactionHeaderRight from '../EditTransactionHeaderRight';

export default StackNavigator({
    Transactions: {
        screen: Transactions,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Transactions',
                headerTitle: <TransactionsHeaderTitle />,
                headerLeft: <DrawerButton navigation={navigation} />,
                headerRight: <SwitchViewTypeIcon />
            }
        }
    },
    EditTransaction: {
        screen: EditTransaction,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Edit transaction',
                headerRight: <EditTransactionHeaderRight navigation={ navigation } />
            };
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
