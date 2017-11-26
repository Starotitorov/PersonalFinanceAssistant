import config from './config';

const API_URL = config.apiUrl;
const AUTH_API_URL = `${API_URL}/auth`;

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

