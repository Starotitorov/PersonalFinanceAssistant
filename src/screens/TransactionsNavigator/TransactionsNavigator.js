import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton, SwitchViewTypeIcon } from 'src/components';
import TransactionsHeaderTitle from '../TransactionsHeaderTitle';
import Transactions from '../Transactions';
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
        navigationOptions: {
            title: 'Edit transaction',
            headerRight: <EditTransactionHeaderRight />
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
