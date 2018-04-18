import { composeValidators, combineValidators } from 'revalidate';
import { required, currency } from '../../utils/validators';
import {
  TRANSACTION_FORM_ACCOUNT_ID_FIELD,
  TRANSACTION_FORM_CATEGORY_ID_FIELD,
  TRANSACTION_FORM_VALUE_FIELD,
  TRANSACTION_FORM_DATE_FIELD
} from './constants';

export default combineValidators({
  [TRANSACTION_FORM_ACCOUNT_ID_FIELD]: required('account'),
  [TRANSACTION_FORM_CATEGORY_ID_FIELD]: required('category'),
  [TRANSACTION_FORM_VALUE_FIELD]: composeValidators(required, currency)('sum'),
  [TRANSACTION_FORM_DATE_FIELD]: required('date')
});
