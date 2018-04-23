import { connect } from 'react-redux';
import EditTransactionScreenView from './EditTransactionScreenView';
import { updateTransaction, setTransaction } from './actions';
import { getEditTransactionFormInitialValues } from './selectors';

const mapStateToProps = state => ({
  initialValues: getEditTransactionFormInitialValues(state)
});

export default connect(mapStateToProps, { updateTransaction, setTransaction })(EditTransactionScreenView);
