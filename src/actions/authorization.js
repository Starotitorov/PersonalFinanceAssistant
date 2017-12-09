import { createAction } from 'redux-actions';
import { SubmissionError } from 'redux-form';
import { AsyncStorage } from 'react-native';
import * as asyncStorageKeys from 'src/constants/asyncStorage';
import { NavigationActions } from 'react-navigation';
import { LoginManager } from 'react-native-fbsdk';
import { fetchApplicationDataRequest } from 'src/actions/application';
import * as api from '../api';

export const setCurrentUser = createAction(
    'AUTHORIZATION/SET_CURRENT_USER',
    user => ({ user })
);
export const setToken = createAction(
    'AUTHORIZATION/SET_TOKEN',
    token => ({ token })
);

export const resetCurrentUser = createAction('AUTHORIZATION/RESET_CURRENT_USER');

export const fetchCurrentUserStart = createAction('AUTHORIZATION/FETCH_CURRENT_USER_START');
export const fetchCurrentUserFinish = createAction('AUTHORIZATION/FETCH_CURRENT_USER_FINISH');

const setAuthorizationData = (user, token) => dispatch => {
    dispatch(setCurrentUser(user));

    dispatch(setToken(token));

    dispatch(fetchApplicationDataRequest());
};

export const logIn = (email, password) => dispatch => {
    return api.signIn(email, password)
        .then(response => response.json())
        .then(async ({ user, token}) => {
            await dispatch(setAuthorizationData(user, token));

            dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' })
                ]
            }));
        })
        .catch(({ error }) => Promise.reject(new SubmissionError({
            _error: error
        })));
};

export const singUp = (userData) => dispatch => {
    return api.signUp(userData)
        .then(response => response.json())
        .then(async ({ user, token }) => {
            await dispatch(setAuthorizationData(user, token));

            dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' })
                ]
            }));
        })
        .catch(({ errors }) => Promise.reject(new SubmissionError({
            ...errors
        })));
};

export const logInFacebook = ({ accessToken }) => dispatch => {
    return api.logInFacebook(accessToken)
        .then(response => response.json())
        .then(async ({ user, token }) => {
            await dispatch(setAuthorizationData(user, token));

            dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' })
                ]
            }));
        });
};

export const logout = () => async dispatch => {
    dispatch(resetCurrentUser());

    LoginManager.logOut();

    dispatch(NavigationActions.reset({
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({ routeName: 'LogIn' })
        ]
    }));
};

export const getCurrentUser = () => async dispatch => {
    dispatch(fetchCurrentUserStart());

    let user = null;
    let token = null;
    try {
        const userObject = await AsyncStorage.getItem(asyncStorageKeys.USER_KEY);
        const tokenObject = await AsyncStorage.getItem(asyncStorageKeys.TOKEN_KEY);

        user = JSON.parse(userObject);
        token = JSON.parse(tokenObject);
    } catch(e) {}

    dispatch(setAuthorizationData(user, token));

    dispatch(fetchCurrentUserFinish());

    if (!user || !token) {
        dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({ routeName: 'LogIn' })
            ]
        }));
    }
};
