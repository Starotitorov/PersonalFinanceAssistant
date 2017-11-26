import { createAction } from 'redux-actions';
import { SubmissionError } from 'redux-form';
import { AsyncStorage } from 'react-native';
import * as asyncStorageKeys from 'src/constants/asyncStorage';
import { NavigationActions } from 'react-navigation';
import { LoginManager } from 'react-native-fbsdk';
import * as api from '../api';

export const setCurrentUser = createAction(
    'AUTHORIZATION/SET_CURRENT_USER',
    user => ({ user })
);
export const setToken = createAction(
    'AUTHORIZATION/SET_TOKEN',
    token => ({ token })
);

const saveUser = (user, token) => async dispatch => {
    await AsyncStorage.setItem(asyncStorageKeys.USER_KEY, JSON.stringify(user));
    await AsyncStorage.setItem(asyncStorageKeys.TOKEN_KEY, JSON.stringify(token));

    dispatch(setCurrentUser(user));

    dispatch(setToken(token));
};

export const logIn = (email, password) => dispatch => {
    return api.signIn(email, password)
        .then(response => response.json())
        .then(async ({ user, token}) => {
            await dispatch(saveUser(user, token));

            dispatch(NavigationActions.reset({
                index: 0,
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
            await dispatch(saveUser(user, token));

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' })
                ]
            }));
        })
        .catch(({ errors }) => Promise.reject(new SubmissionError({
            errors
        })));
};

export const logInFacebook = ({ accessToken }) => dispatch => {
    return api.logInFacebook(accessToken)
        .then(response => response.json())
        .then(async ({ user, token }) => {
            await dispatch(saveUser(user, token));

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' })
                ]
            }));
        });
};

export const logout = () => async dispatch => {
    await dispatch(saveUser(null, null));

    LoginManager.logOut();

    dispatch(NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'LogIn' })
        ]
    }));
};
