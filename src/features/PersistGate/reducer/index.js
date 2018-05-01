import { combineReducers } from 'redux';
import accounts from './accounts';
import categories from './categories';
import transactions from './transactions';
import transfers from './transfers';

const storage = combineReducers({
  accounts,
  categories,
  transactions,
  transfers
});

export default storage;
