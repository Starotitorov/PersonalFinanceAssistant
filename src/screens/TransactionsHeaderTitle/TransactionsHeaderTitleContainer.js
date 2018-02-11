import { connect } from 'react-redux';
import { getCurrentPeriodType, getSelectedAccountId } from '../Transactions/selectors';
import { getSelectInputOptionsFromAllAccounts } from './selectors';
import { setSelectedAccount, changePeriodView } from '../Transactions/actions'
import TransactionsHeaderTitle from './TransactionsHeaderTitle';

const mapStateToProps = state => {
    return {
        selectedValue: getCurrentPeriodType(state),
        accountOptions: getSelectInputOptionsFromAllAccounts(state),
        selectedAccountId: getSelectedAccountId(state)
    };
};

export default connect(
    mapStateToProps, { setSelectedAccount, changePeriodView }
)(TransactionsHeaderTitle);
