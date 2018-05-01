import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import { createTransaction } from '../PersistGate/actions';

export const setAccounts = createAction(
  'ADD_TRANSACTION/SET_ACCOUNTS',
  accounts => ({ accounts })
);

export const setCategories = createAction(
  'ADD_TRANSACTION/SET_CATEGORIES',
  categories => ({ categories })
);

export const setAddTransactionData = ({ accounts, categories }) => dispatch => {
  dispatch(setCategories(categories));

  dispatch(setAccounts(accounts));
};

export const addTransaction = transactionData => dispatch => {
  dispatch(createTransaction(transactionData));

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Transactions' })
    ]
  }));
};
