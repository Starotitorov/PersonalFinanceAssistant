import { connect } from 'react-redux';
import { changePeriodView } from 'src/actions/transactions';
import { getCurrentPeriodType, getSelectedAccountId } from 'src/selectors/transactions';
import { setSelectedAccount } from 'src/actions/transactions';
import { getSelectInputOptionsFromAllAccounts } from 'src/selectors/accounts';
import TransactionsHeaderTitle from './TransactionsHeaderTitle';

const mapStateToProps = state => {
    return {
        selectedValue: getCurrentPeriodType(state),
        accountOptions: getSelectInputOptionsFromAllAccounts(state),
        selectedAccountId: getSelectedAccountId(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onValueChange(value) {
            dispatch(changePeriodView(value))
        },

        onChangeAccount(id) {
            dispatch(setSelectedAccount(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsHeaderTitle);
