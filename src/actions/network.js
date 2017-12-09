import { createAction } from 'redux-actions';

export const setConnectionInfo = createAction(
    'NETWORK/SET_CONNECTION_INFO',
    (connectionInfo) => ({ connectionInfo })
);
