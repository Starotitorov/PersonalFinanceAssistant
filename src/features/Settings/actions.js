import {
  resetAccounts,
  resetCategories,
  resetTransactions,
  resetTransfers
} from '../PersistGate/actions';
import { alerts } from 'src/utils';

export const resetData = () => dispatch => {
  dispatch(resetAccounts());

  dispatch(resetCategories());

  dispatch(resetTransfers());

  dispatch(resetTransactions());

  alerts.showResetDataAlert();
};
