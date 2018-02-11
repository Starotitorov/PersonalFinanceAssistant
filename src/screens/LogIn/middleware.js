import { AsyncStorage } from 'react-native';
import { setCurrentUser, setToken, resetCurrentUser } from './actions';
import { USER_KEY } from 'src/constants/asyncStorage';
import { JWTStorage } from 'src/utils/index';

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

                break;
            default:
                break;
        }
    };
};
