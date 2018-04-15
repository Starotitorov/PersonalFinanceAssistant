import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { cacheAuthorizationDataToAsyncStorage } from 'src/screens/LogIn/middleware';

export default function configureStore(initialState = {}) {
  const middleware = [
    thunk,
    cacheAuthorizationDataToAsyncStorage
  ];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }

  return applyMiddleware(...middleware)(createStore)(rootReducer, initialState);
}
