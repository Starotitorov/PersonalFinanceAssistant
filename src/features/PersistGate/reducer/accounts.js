import { handleActions } from 'redux-actions';
import { createAccount, editAccount, deleteAccountFromList, resetAccounts } from '../actions/accounts';
import { insert, update, remove } from '../../../utils/stateHelpers';

export const createAccountModel = props => {
  const {
    name,
    icon,
    initialBalance,
    initialDate = new Date(),
    currency,
  } = props;

  return { name, icon, initialBalance: Number(initialBalance), initialDate, currency };
};

const initialState = {
  byId: {},
  order: []
};

const accountsReducer = handleActions({
  [createAccount]: (state, { payload }) => insert(state, createAccountModel(payload)),
  [editAccount]: (state, { payload }) => update(state, payload.id, payload.account),
  [deleteAccountFromList]: (state, { payload }) => remove(state, payload),
  [resetAccounts]: () => initialState
}, initialState);

export default accountsReducer;
