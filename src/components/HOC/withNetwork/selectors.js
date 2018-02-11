const CONNECTION_INFO_TYPE_NONE = 'none';

export const getNetworkConnectionInfo = state => state.network.connectionInfo;
export const isConnected = state => {
    return !state.network.connectionInfo || state.network.connectionInfo.type !== CONNECTION_INFO_TYPE_NONE;
}
