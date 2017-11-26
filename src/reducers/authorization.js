import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    setCurrentUser,
    setToken,
    fetchCurrentUserStart,
    fetchCurrentUserFinish
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

const fetching = handleActions({
    [fetchCurrentUserStart]: () => true,
    [fetchCurrentUserFinish]: () => false
}, false);

export default combineReducers({
    user,
    token,
    fetching
})
