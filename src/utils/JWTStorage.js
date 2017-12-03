import { AsyncStorage } from 'react-native';
import { TOKEN_KEY } from 'src/constants/asyncStorage';

let token = null;

export const setToken = async value => {
    await AsyncStorage.setItem(TOKEN_KEY, value);

    token = value;
};

export const getToken = async token => {
    if (!token) {
        token = await AsyncStorage.getItem(TOKEN_KEY);
    }

    return token;
};

export const removeToken = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);

    token = null;
};
