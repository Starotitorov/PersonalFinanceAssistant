import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigation from './navigation';
import authorization from './authorization';
import accounts from './accounts';
import categories from './categories';
import application from './application';
import transactions from './transactions';
import trends from './trends';
import exchangeRates from './exchangeRates';

import accountsList from 'src/screens/AccountsList/reducer';
import editAccount from 'src/screens/EditAccount/reducer';
import network from 'src/components/HOC/withNetwork/reducer';
import categoriesList from 'src/screens/CategoriesList/reducer';
import editCategory from 'src/screens/EditCategory/reducer'

export default combineReducers({
    navigation,
    application,
    authorization,
    accounts,
    categories,
    network,
    form,
    transactions,
    trends,
    exchangeRates,

    accountsList,
    categoriesList,
    editAccount,
    editCategory
});
