import { AsyncStorage } from 'react-native';
import { setCurrentUser, setToken, resetCurrentUser } from 'src/actions/authorization';
import { resetAccounts } from 'src/actions/accounts';
import { resetCategories } from 'src/actions/categories';
import { USER_KEY } from 'src/constants/asyncStorage';
import { JWTStorage } from 'src/utils';

export const cacheAuthorizationDataToAsyncStorage = ({ dispatch, getState }) => {
    return next => (action) => {
        next(action);

        switch (action.type) {
            case setCurrentUser.toString():
                AsyncStorage.setItem(
                    USER_KEY,
                    JSON.stringify(action.payload.user)
                );
                break;
            case setToken.toString():
                JWTStorage.setToken(action.payload.token);
                break;
            case resetCurrentUser.toString():
                AsyncStorage.setItem(
                    USER_KEY,
                    JSON.stringify(null)
                );
                JWTStorage.removeToken();

                dispatch(resetAccounts());

                dispatch(resetCategories());
                break;
            default:
                break;
        }
    };
};
