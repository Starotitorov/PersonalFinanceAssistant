import { connect } from 'react-redux';
import { setSelectedAccount } from 'src/actions/trends';
import { getSelectInputOptionsFromAllAccounts } from 'src/selectors/accounts';
import TrendsHeaderTitle from './TrendsHeaderTitle';

const mapStateToProps = state => {
    return {
        accountOptions: getSelectInputOptionsFromAllAccounts(state),
        selectedAccountId: state.trends.selectedAccount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeAccount(id) {
            dispatch(setSelectedAccount(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendsHeaderTitle);
