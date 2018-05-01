import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as modal } from 'redux-modal';
import navigation from 'src/features/AppNavigator/reducer';
import editAccount from 'src/features/EditAccount/reducer';
import network from 'src/components/HOC/withNetwork/reducer';
import editCategory from 'src/features/EditCategory/reducer';
import addTransfer from 'src/features/AddTransfer/reducer';
import addTransaction from 'src/features/AddTransaction/reducer';
import editTransaction from 'src/features/EditTransaction/reducer';
import trends from 'src/features/Trends/reducer';
import currency from 'src/features/Currency/reducer';
import accountsList from 'src/features/AccountsList/reducer';
import categoriesList from 'src/features/CategoryTabs/reducer';
import transactionsList from 'src/features/Transactions/reducer';
import app from 'src/features/App/reducer';

export default combineReducers({
  app,
  accountsList,
  categoriesList,
  transactionsList,
  navigation,
  network,
  form,
  editAccount,
  editCategory,
  addTransfer,
  transactionsList,
  addTransaction,
  editTransaction,
  trends,
  currency,
  modal
});
