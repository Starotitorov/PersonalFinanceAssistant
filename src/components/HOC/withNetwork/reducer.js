import { handleActions } from 'redux-actions';
import { setConnectionInfo } from './actions';

const initialState = {
  connectionInfo: null
};

const network = handleActions({
  [setConnectionInfo]: (state, { payload }) => ({
    ...state,
    connectionInfo: payload.connectionInfo
  })
}, initialState);

export default network;
