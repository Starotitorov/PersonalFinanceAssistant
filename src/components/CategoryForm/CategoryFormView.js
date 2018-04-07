import { reduxForm } from 'redux-form';
import { CATEGORY_FORM } from './constants';
import validate from './validate';
import CategoryForm from './CategoryForm';

export default reduxForm({ form: CATEGORY_FORM, validate })(CategoryForm);
