import { connect } from 'react-redux';
import { updateTransaction } from 'src/actions/transactions';
import EditTransactionScreen from './EditTransactionScreen';
import { getEditTransactionFormInitialValues } from 'src/selectors/forms';

const mapStateToProps = state => {
    return {
        initialValues: getEditTransactionFormInitialValues(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTransaction(transactionData) {
            return dispatch(updateTransaction(transactionData))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTransactionScreen);
