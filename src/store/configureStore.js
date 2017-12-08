import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from 'src/reducers';
import { cacheAuthorizationDataToAsyncStorage } from 'src/middleware/authorization';

export default function configureStore(initialState = {}) {
    const middleware = [
        thunk,
        cacheAuthorizationDataToAsyncStorage
    ];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(logger);
    }

    return applyMiddleware(...middleware)(createStore)(appReducer, initialState);
}
