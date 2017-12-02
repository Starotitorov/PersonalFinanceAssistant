import config from './config';
import FetchMock from 'react-native-fetch-mock';
import { fetch } from 'src/lib';

const API_URL = config.apiUrl;
const AUTH_API_URL = `${API_URL}/auth`;

// Mock api
global.fetch = new FetchMock(require('../__mocks__')).fetch;

export const signIn = (email, password) => fetch(`${AUTH_API_URL}/signin`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
});

export const signUp = (userData) => fetch(`${AUTH_API_URL}/signup`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: userData })
});

export const logInFacebook = accessToken => fetch(`${AUTH_API_URL}/signin/facebook`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: accessToken })
});

export const fetchAccounts = token => fetch(`${API_URL}/accounts`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token
    }
});

export const addAccount = (token, accountData) => fetch(`${API_URL}/accounts`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token
    },
    body: JSON.stringify({ account: accountData })
});

