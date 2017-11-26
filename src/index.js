import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import FetchMock from 'react-native-fetch-mock';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import JSExceptionHandler from './JSExceptionHandler';
import App from './screens/App';
import { getCurrentUser } from 'src/actions/authorization';

setJSExceptionHandler(JSExceptionHandler);

// Mock api
global.fetch = new FetchMock(require('../__mocks__')).fetch;

const store = configureStore();
store.dispatch(getCurrentUser());

export default function Application() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
