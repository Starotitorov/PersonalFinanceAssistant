import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as modal } from 'redux-modal';
import navigation from 'src/screens/AppNavigator/reducer';
import accountsList from 'src/screens/AccountsList/reducer';
import editAccount from 'src/screens/EditAccount/reducer';
import network from 'src/components/HOC/withNetwork/reducer';
import categoriesList from 'src/screens/CategoriesList/reducer';
import editCategory from 'src/screens/EditCategory/reducer';
import addTransfer from 'src/screens/AddTransfer/reducer';
import transactionsList from 'src/screens/Transactions/reducer';
import addTransaction from 'src/screens/AddTransaction/reducer';
import editTransaction from 'src/screens/EditTransaction/reducer';
import trends from 'src/screens/Trends/reducer';
import currency from 'src/screens/Currency/reducer';
import authorization from 'src/screens/LogIn/reducer';

export default combineReducers({
  navigation,
  network,
  form,
  authorization,
  accountsList,
  categoriesList,
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
