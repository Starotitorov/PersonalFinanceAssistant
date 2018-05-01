import { NavigationActions } from 'react-navigation';
import { createAction } from 'redux-actions';
import { fetchAccounts, fetchCategories, fetchTransfers, fetchTransactions } from '../../services/database';

export const setAccountsListData = createAction('ACCOUNTS_LIST/SET_ACCOUNTS_LIST_DATA');

export const fetchAccountsListDataStart = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_START');
export const fetchAccountsListDataFailure = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_FAILURE');

export const fetchAccountsListData = () => async dispatch => {
  dispatch(fetchAccountsListDataStart());

  try {
    const [accounts, categories, transactions, transfers] = await Promise.all([
      fetchAccounts(),
      fetchCategories(),
      fetchTransactions(),
      fetchTransfers()
    ]);

    dispatch(setAccountsListData({ accounts, categories, transactions, transfers }));
  } catch(e) {
    dispatch(fetchAccountsListDataFailure());
  }
};

export const addAccount = id => dispatch => {
  dispatch(NavigationActions.navigate({ routeName: 'AddAccount' }));
};

export const editAccount = id => (dispatch, getState) => {
  const { accountsList: { accounts: { byId }}} = getState();

  dispatch(NavigationActions.navigate({
    routeName: 'EditAccount',
    params: {
      account: byId[id]
    }
  }));
};
