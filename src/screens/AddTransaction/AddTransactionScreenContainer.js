import { connect } from 'react-redux';
import { addTransaction, setAddTransactionData } from './actions';
import { getAddTransactionFormOptions } from './selectors';
import AddTransactionScreenView from './AddTransactionScreenView';

const mapStateToProps = state => ({
  options: getAddTransactionFormOptions(state)
});

export default connect(mapStateToProps, { addTransaction, setAddTransactionData })(AddTransactionScreenView);
