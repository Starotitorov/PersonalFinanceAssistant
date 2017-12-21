const CONNECTION_INFO_TYPE_NONE = 'none';
import { alerts } from 'src/utils';

let connectionInfo;

export const setConnectionInfo = info => {
    connectionInfo = info
};

export const isConnected = () => !connectionInfo || connectionInfo.type !== CONNECTION_INFO_TYPE_NONE;

export const sendRequest = (...args) => {
    if (!isConnected()) {
        alerts.showNetworkErrorAlert();

        throw new Error('Not connected');
    }

    return fetch(...args)
};
