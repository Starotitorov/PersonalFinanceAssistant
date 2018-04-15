const CONNECTION_INFO_TYPE_NONE = 'none';

export const getNetworkConnectionInfo = state => state.network.connectionInfo;
export const isConnected = ({ network: { connectionInfo }}) =>
  !connectionInfo || connectionInfo.type !== CONNECTION_INFO_TYPE_NONE;
