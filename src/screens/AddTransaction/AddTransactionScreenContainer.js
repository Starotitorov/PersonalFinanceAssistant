import { connect } from 'react-redux';
import { addTransaction } from 'src/actions/transactions';
import { getTransactionFormOptions } from 'src/selectors/forms';
import AddTransactionScreen from './AddTransactionScreen';

const mapStateToProps = state => {
    return {
        options: getTransactionFormOptions(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTransaction(data) {
            return dispatch(addTransaction(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionScreen);
