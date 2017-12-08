import config from './config';
import FetchMock from 'react-native-fetch-mock';
import { fetch } from 'src/lib';
import { JWTStorage } from 'src/utils';

const API_URL = config.apiUrl;
const AUTH_API_URL = `${API_URL}/auth`;

// Mock api
global.fetch = new FetchMock(require('../mocks/api')).fetch;

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

export const fetchAccounts = async () => fetch(`${API_URL}/accounts`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    }
});

export const addAccount = async accountData => fetch(`${API_URL}/accounts`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    },
    body: JSON.stringify({ account: accountData })
});

export const updateAccount = async (id, accountData) => fetch(`${API_URL}/accounts/${id}`, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    },
    body: JSON.stringify({ account: accountData })
});

export const removeAccount = async id => fetch(`${API_URL}/accounts/${id}`, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    }
});

export const fetchCategories = async () => fetch(`${API_URL}/categories`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    }
})
