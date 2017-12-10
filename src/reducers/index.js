import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigation from './navigation';
import authorization from './authorization';
import accounts from './accounts';
import categories from './categories';
import application from './application';
import network from './network';
import transactions from './transactions';

export default combineReducers({
    navigation,
    application,
    authorization,
    accounts,
    categories,
    network,
    form,
    transactions
});
