import { connect } from 'react-redux';
import { changePeriodView } from 'src/actions/transactions';
import { getCurrentPeriodType } from 'src/selectors/transactions';
import TransactionsHeaderTitle from './TransactionsHeaderTitle';

const mapStateToProps = state => {
    return {
        selectedValue: getCurrentPeriodType(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onValueChange(value) {
            dispatch(changePeriodView(value))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsHeaderTitle);
