import { AsyncStorage } from 'react-native';
import { TOKEN_KEY } from 'src/constants/asyncStorage';

let token = null;

export const setToken = async value => {
    await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(value));

    token = value;
};

export const getToken = async () => {
    if (!token) {
        const tokenObject = await AsyncStorage.getItem(TOKEN_KEY);

        token = JSON.parse(tokenObject);
    }

    return token;
};

export const removeToken = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);

    token = null;
};
