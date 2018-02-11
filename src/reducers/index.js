import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authorization from './authorization';
import accounts from './accounts';
import categories from './categories';
import application from './application';
import transactions from './transactions';
import exchangeRates from './exchangeRates';

import navigation from 'src/screens/AppNavigator/reducer'
import accountsList from 'src/screens/AccountsList/reducer';
import editAccount from 'src/screens/EditAccount/reducer';
import network from 'src/components/HOC/withNetwork/reducer';
import categoriesList from 'src/screens/CategoriesList/reducer';
import editCategory from 'src/screens/EditCategory/reducer';
import addTransfer from 'src/screens/AddTransfer/reducer';
import transactionsList from 'src/screens/Transactions/reducer';
import addTransaction from 'src/screens/AddTransaction/reducer';
import editTransaction from 'src/screens/EditTransaction/reducer';
import trends from 'src/screens/Trends/reducer';

export default combineReducers({
    navigation,
    application,
    authorization,
    accounts,
    categories,
    network,
    form,
    transactions,
    exchangeRates,

    accountsList,
    categoriesList,
    editAccount,
    editCategory,
    addTransfer,
    transactionsList,
    addTransaction,
    editTransaction,
    trends
});
