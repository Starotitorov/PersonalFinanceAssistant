import { connect } from 'react-redux';
import { changeDate } from 'src/actions/transactions'
import { getFormattedCurrentDate } from 'src/selectors/transactions';
import TransactionsScreen from './TransactionsScreen';

const mapStateToProps = state => {
    return {
        currentDate: getFormattedCurrentDate(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeCurrentDateForward() {
            dispatch(changeDate(true));
        },

        onChangeCurrentDateBack() {
            dispatch(changeDate());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
