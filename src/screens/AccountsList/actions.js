import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setAccounts = createAction(
  'ACCOUNTS_LIST/SET_ACCOUNTS',
  accounts => ({ accounts })
);

export const fetchAccountsListDataStart = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_START');
export const fetchAccountsListDataFailure = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_FAILURE');
export const fetchAccountListDataSuccess = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_SUCCESS');

const fetchAccountsListDataRequest = () => dispatch => api.fetchAccounts()
  .then(({ accounts }) => {
    dispatch(setAccounts(accounts));
  });

export const fetchAccountsListData = () => async dispatch => {
  dispatch(fetchAccountsListDataStart());

  try {
    await dispatch(fetchAccountsListDataRequest());

    dispatch(fetchAccountListDataSuccess());
  } catch (e) {
    dispatch(fetchAccountsListDataFailure(e));
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
