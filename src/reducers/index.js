import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigation from './navigation';

export default combineReducers({
    navigation,
    form
});
