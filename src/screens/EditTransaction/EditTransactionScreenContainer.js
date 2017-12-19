import { connect } from 'react-redux';
import { updateTransaction } from 'src/actions/transactions';
import EditTransactionScreen from './EditTransactionScreen';

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTransaction(transactionData) {
            return dispatch(updateTransaction(transactionData))
        }
    }
};

export default connect(null, mapDispatchToProps)(EditTransactionScreen);
