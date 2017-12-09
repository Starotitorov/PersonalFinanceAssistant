import { handleActions } from 'redux-actions';
import { setConnectionInfo } from 'src/actions/network';

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
