import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    setCurrentUser,
    setToken
} from 'src/actions/authorization';

const user = handleActions({
    [setCurrentUser]: (state, action) => {
        return action.payload.user
    }
}, null);

const token = handleActions({
    [setToken]: (state, action) => {
        return action.payload.token
    }
}, null);

export default combineReducers({
    user,
    token
})
