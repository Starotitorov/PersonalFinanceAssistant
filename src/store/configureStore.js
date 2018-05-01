import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}, persistConfig) {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }

  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  const persistor = persistStore(store);

  return { store, persistor };
}
