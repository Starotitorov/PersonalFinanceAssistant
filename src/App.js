import React from 'react';
import { Provider } from 'react-redux';
import PersistGate, { persistConfig } from './features/PersistGate';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { configureStore } from 'src/store';
import JSExceptionHandler from './JSExceptionHandler';
import App from './features/App';

setJSExceptionHandler(JSExceptionHandler);

const { store, persistor } = configureStore({}, persistConfig);

const Application = () =>
  <Provider store={ store }>
    <PersistGate persistor={ persistor }>
      <App />
    </PersistGate>
  </Provider>;

export default Application;
