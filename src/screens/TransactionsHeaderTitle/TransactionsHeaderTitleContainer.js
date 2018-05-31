import { connect } from 'react-redux';
import { getCurrentPeriodType, getSelectedAccountId, isTransactionsListDataRefreshing } from '../Transactions/selectors';
import { getSelectInputOptionsFromAllAccounts } from './selectors';
import { changeAccount, changePeriodView } from '../Transactions/actions';
import TransactionsHeaderTitle from './TransactionsHeaderTitle';

const mapStateToProps = state => ({
  disabled: isTransactionsListDataRefreshing(state),
  selectedValue: getCurrentPeriodType(state),
  accountOptions: getSelectInputOptionsFromAllAccounts(state),
  selectedAccountId: getSelectedAccountId(state)
});

export default connect(
  mapStateToProps, { changeAccount, changePeriodView }
)(TransactionsHeaderTitle);
