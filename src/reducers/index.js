import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigation from './navigation';
import authorization from './authorization';
import accounts from './accounts';

export default combineReducers({
    navigation,
    authorization,
    accounts,
    form
});
