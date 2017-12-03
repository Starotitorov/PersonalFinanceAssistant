import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigation from './navigation';
import authorization from './authorization';
import accounts from './accounts';
import categories from './categories';

export default combineReducers({
    navigation,
    authorization,
    accounts,
    categories,
    form
});
