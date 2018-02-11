import { handleActions } from 'redux-actions';
import { setConnectionInfo } from './actions';

const initialState = {
    connectionInfo: null
};

const network = handleActions({
    [setConnectionInfo]: (state, { payload }) => {
        return {
            ...state,
            connectionInfo: payload.connectionInfo
        };
    }
}, initialState);

export default network;
