import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import JSExceptionHandler from './JSExceptionHandler';
import App from './screens/App';

setJSExceptionHandler(JSExceptionHandler);

const store = configureStore();

export default function Application() {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
}
