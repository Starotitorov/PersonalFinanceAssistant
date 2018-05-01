import { handleActions } from 'redux-actions';
import { createTransaction, editTransaction, deleteTransaction, setTransactions, resetTransactions } from '../actions/transactions';
import { insert, update, remove, replaceAll } from '../../../utils/stateHelpers';

export const createTransactionModel = props => {
  const { value, date = new Date(), note, accountId, categoryId } = props;

  return { value: Number(value), accountId, categoryId, date, note };
};

const initialState = {
  byId: {},
  order: []
};

const transactionsReducer = handleActions({
  [createTransaction]: (state, { payload }) => insert(
    state,
    createTransactionModel(payload),
  ),
  [editTransaction]: (state, { payload }) => update(state, payload.id, payload.transaction),
  [deleteTransaction]: (state, { payload }) => remove(state, payload),
  [setTransactions]: (state, { payload }) => replaceAll(state, payload),
  [resetTransactions]: () => initialState
}, initialState);

export default transactionsReducer;
