import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    setCurrentUser,
    setToken,
    resetCurrentUser,
    fetchCurrentUserStart,
    fetchCurrentUserFinish
} from 'src/actions/authorization';

const initialUserState = null;
const initialTokenState = null;

const user = handleActions({
    [setCurrentUser]: (state, action) => {
        return action.payload.user;
    },
    [resetCurrentUser]: () => initialUserState
}, initialUserState);

const token = handleActions({
    [setToken]: (state, action) => {
        return action.payload.token
    },
    [resetCurrentUser]: () => initialTokenState
}, initialTokenState);

const fetching = handleActions({
    [fetchCurrentUserStart]: () => true,
    [fetchCurrentUserFinish]: () => false
}, false);

export default combineReducers({
    user,
    token,
    fetching
})
