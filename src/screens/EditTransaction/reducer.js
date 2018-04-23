import { handleActions } from 'redux-actions';
import { setTransaction } from './actions';

const initialState = {
  transaction: {}
};

const editTransaction = handleActions({
  [setTransaction]: (state, { payload: { transaction }}) => ({
    transaction
  })
}, initialState);

export default editTransaction;
