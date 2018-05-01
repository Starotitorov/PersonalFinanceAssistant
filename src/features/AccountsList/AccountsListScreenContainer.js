import { connect } from 'react-redux';
import {
  addAccount,
  editAccount
} from './actions';
import { getAllAccounts } from '../PersistGate/selectors';
import AccountsListScreen from './AccountsListScreen';

const mapStateToProps = state => ({
  accounts: getAllAccounts(state)
});

export default connect(
  mapStateToProps,
  {
    addAccount,
    editAccount
  }
)(AccountsListScreen);
