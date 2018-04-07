import { connect } from 'react-redux';
import EditTransactionScreenView from './EditTransactionScreenView';
import { updateTransaction, fetchTransaction } from './actions'
import { getEditTransactionFormInitialValues, isTransactionFetching } from './selectors';

const mapStateToProps = state => ({
    isLoading: isTransactionFetching(state),
    initialValues: getEditTransactionFormInitialValues(state)
});

export default connect(mapStateToProps, { updateTransaction, fetchTransaction })(EditTransactionScreenView);
