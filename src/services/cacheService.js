import { AsyncStorage } from 'react-native';
import md5 from 'md5';
import { CacheError } from './errors'

const ASYNC_STORAGE_KEY_PREFIX = '@PersonalFinanceAssistant:cache-';

const generateStorageKey = url => ASYNC_STORAGE_KEY_PREFIX + md5(url);

export const save = async (url, data) => AsyncStorage.setItem(generateStorageKey(url), JSON.stringify(data));

export const load = async url => {
    const data = await AsyncStorage.getItem(generateStorageKey(url));

    if (typeof data !== 'string') {
        throw new CacheError();
    }

    return JSON.parse(data);
};

export const clear = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const cacheKeys = keys.filter(key => key.startsWith(ASYNC_STORAGE_KEY_PREFIX));

    AsyncStorage.multiRemove(cacheKeys);
};
