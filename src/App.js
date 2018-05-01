import React from 'react';
import { Provider } from 'react-redux';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { configureStore } from 'src/store';
import JSExceptionHandler from './JSExceptionHandler';
import App from './features/App';

setJSExceptionHandler(JSExceptionHandler);

const store = configureStore({});

const Application = () =>
  <Provider store={ store }>
    <App />
  </Provider>;

export default Application;
