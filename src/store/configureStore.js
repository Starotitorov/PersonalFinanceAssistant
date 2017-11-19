import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from 'src/reducers';

export default function configureStore(initialState = {}) {
    const middleware = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(logger);
    }

    return applyMiddleware(...middleware)(createStore)(appReducer, initialState);
}
