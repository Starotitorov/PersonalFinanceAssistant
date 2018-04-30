import React from 'react';
import { Provider } from 'react-redux';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { cacheService } from 'src/services';
import { configureStore } from 'src/store';
import JSExceptionHandler from './JSExceptionHandler';
import App from './screens/App';

setJSExceptionHandler(JSExceptionHandler);

cacheService.clear();

const store = configureStore();

export default function Application() {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
}
