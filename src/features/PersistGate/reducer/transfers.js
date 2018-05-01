import { handleActions } from 'redux-actions';
import { createTransfer, resetTransfers } from '../actions/transfers';
import { insert } from '../../../utils/stateHelpers';

export const createTransferModel = props => {
  const { value, fromAccountId, toAccountId, exchangeRate, date = new Date(), note } = props;

  return { value, fromAccountId, toAccountId, exchangeRate, date, note };
};

const initialState = {
  byId: {},
  order: []
};

const transfersReducer = handleActions({
  [createTransfer]: (state, { payload }) => insert(state, createTransferModel(payload)),
  [resetTransfers]: () => initialState
}, initialState);

export default transfersReducer;
