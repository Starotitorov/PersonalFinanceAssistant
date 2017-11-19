import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import App from './App';

const store = configureStore();

export default function Application() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
