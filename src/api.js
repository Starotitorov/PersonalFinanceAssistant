import config from './config';
import { JWTStorage } from 'src/utils';
import { networkService } from 'src/services';

const API_URL = config.apiUrl;
const AUTH_API_URL = `${API_URL}/auth`;

export const signIn = (email, password) => networkService.sendRequest(`${AUTH_API_URL}/signin`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
});

export const signUp = (userData) => networkService.sendRequest(`${AUTH_API_URL}/signup`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: userData })
});

export const logInFacebook = accessToken => networkService.sendRequest(`${AUTH_API_URL}/signin/facebook`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: accessToken })
});

export const fetchAccounts = async () => networkService.sendRequest(`${API_URL}/accounts`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    }
});

export const addAccount = async accountData => networkService.sendRequest(`${API_URL}/accounts`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    },
    body: JSON.stringify({ account: accountData })
});

export const updateAccount = async (id, accountData) => networkService.sendRequest(`${API_URL}/accounts/${id}`, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    },
    body: JSON.stringify({ account: accountData })
});

export const removeAccount = async id => networkService.sendRequest(`${API_URL}/accounts/${id}`, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    }
});

export const fetchCategories = async () => networkService.sendRequest(`${API_URL}/categories`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    }
});

export const addCategory = async categoryData => networkService.sendRequest(`${API_URL}/categories`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    },
    body: JSON.stringify({ category: categoryData })
});

export const updateCategory = async (id, categoryData) => networkService.sendRequest(`${API_URL}/categories/${id}`, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    },
    body: JSON.stringify({ category: categoryData })
});

export const removeCategory = async id => networkService.sendRequest(`${API_URL}/categories/${id}`, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    }
});

export const addTransfer = async transferData => networkService.sendRequest(`${API_URL}/transfers`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    },
    body: JSON.stringify({ transfer: transferData })
});

export const fetchTransactions = async () => networkService.sendRequest(`${API_URL}/transactions`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    }
});

export const addTransaction = async transactionData => networkService.sendRequest(`${API_URL}/transactions`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': await JWTStorage.getToken()
    },
    body: JSON.stringify({ transaction: transactionData })
});

export const fetchExchangeRates = () => networkService.sendRequest(config.exchangeRatesUrl);

// TODO: Add api calls
export const changePassword = data => Promise.resolve(data);
export const updateTransaction = (id, data) => Promise.resolve(data);
export const removeTransaction = id => Promise.resolve(id);
