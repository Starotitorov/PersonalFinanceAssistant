import { AsyncStorage } from 'react-native';
import { setAccounts, resetAccounts } from 'src/actions/accounts';
import { ACCOUNTS_KEY } from 'src/constants/asyncStorage';

const initialState = {
    byId: {},
    order: []
};

export const cacheAccountsToAsyncStorage = ({ getState }) => {
    return next => (action) => {
        next(action);

        const { accounts: { byId, order } } = getState();

        switch (action.type) {
            case setAccounts.toString():
                AsyncStorage.setItem(ACCOUNTS_KEY, JSON.stringify({ byId, order }));
                break;
            case resetAccounts.toString():
                AsyncStorage.setItem(ACCOUNTS_KEY, JSON.stringify(initialState));
                break;
            default:
                break;
        }
    };
};
