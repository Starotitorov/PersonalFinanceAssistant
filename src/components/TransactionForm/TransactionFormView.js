import { reduxForm } from 'redux-form';
import TransactionForm from './TransactionForm';
import validate from './validate';
import { getInitialValues } from './helpers';
import { TRANSACTION_FORM } from './constants';

export default reduxForm({
  form: TRANSACTION_FORM,
  initialValues: getInitialValues(),
  validate
})(TransactionForm);
