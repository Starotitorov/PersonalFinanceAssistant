import { fetch } from 'src/utils';
import logNetworkRequest from './logNetworkRequest';
import FetchMock from 'react-native-fetch-mock';

const CONNECTION_INFO_TYPE_NONE = 'none';

// Mock api
global.fetch = new FetchMock(require('../../mocks')).fetch;

let connectionInfo;

export const setConnectionInfo = info => {
    connectionInfo = info
};

export const isConnected = () => !connectionInfo || connectionInfo.type !== CONNECTION_INFO_TYPE_NONE;

export const sendRequest = (...args) => {
    if (!isConnected()) {
        return Promise.reject(new Error('Not connected'));
    }

    if (process.env.NODE_ENV === 'development') {
        logNetworkRequest(...args);
    }

    return fetch(...args)
};
