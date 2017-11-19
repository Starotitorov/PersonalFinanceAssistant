import { createAction } from 'redux-actions';
import { SubmissionError } from 'redux-form';
import { AsyncStorage } from 'react-native';
import * as asyncStorageKeys from 'src/constants/asyncStorage';
import * as api from '../api';

export const setCurrentUser = createAction(
    'AUTHORIZATION/SET_CURRENT_USER',
    user => ({ user })
);
export const setToken = createAction(
    'AUTHORIZATION/SET_TOKEN',
    token => ({ token })
);

export const logIn = (email, password) => async dispatch => {
    return api.signIn(email, password)
        .then(response => response.json())
        .then(({ user, token}) => {
            AsyncStorage.multiSet(
                [asyncStorageKeys.USER_KEY, user],
                [asyncStorageKeys.TOKEN_KEY, token]
            );
            debugger;

            dispatch(setCurrentUser(user));

            dispatch(setToken(token));
        })
        .catch(error => Promise.reject(new SubmissionError({
            _error: error
        })));
};
