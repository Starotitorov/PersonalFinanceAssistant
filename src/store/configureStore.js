import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}) {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}
