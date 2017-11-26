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

const saveUser = (user, token) => dispatch => {
    debugger;
    AsyncStorage.setItem(asyncStorageKeys.USER_KEY, JSON.stringify(user));
    AsyncStorage.setItem(asyncStorageKeys.TOKEN_KEY, token);

    dispatch(setCurrentUser(user));

    dispatch(setToken(token));
};

export const logIn = (email, password) => dispatch => {
    return api.signIn(email, password)
        .then(response => response.json())
        .then(({ user, token}) => dispatch(saveUser(user, token)))
        .catch(({ error }) => Promise.reject(new SubmissionError({
            _error: error
        })));
};

export const singUp = (userData) => dispatch => {
    return api.signUp(userData)
        .then(response => response.json())
        .then(({ user, token }) => dispatch(saveUser(user, token)))
        .catch(({ errors }) => Promise.reject(new SubmissionError({
            errors
        })));
};

export const logInFacebook = ({ accessToken }) => dispatch => {
    debugger;
    return api.logInFacebook(accessToken)
        .then(response => response.json())
        .then(({ user, token }) => dispatch(saveUser(user, token)));
};
