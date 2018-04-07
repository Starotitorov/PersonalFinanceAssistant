import { reduxForm } from 'redux-form'
import { ACCOUNT_FORM } from './constants'
import AccountForm from './AccountForm';
import validate from './validate';
import { getInitialValues } from './helpers'

export default reduxForm({
    form: ACCOUNT_FORM,
    initialValues: getInitialValues(),
    validate
})(AccountForm);
