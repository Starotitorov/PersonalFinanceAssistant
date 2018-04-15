import { composeValidators, combineValidators } from 'revalidate';
import { required, number, range } from '../../utils/validators';
import {
  ACCOUNT_FORM_BALANCE_FIELD,
  ACCOUNT_FORM_NAME_FIELD,
  ACCOUNT_FORM_INITIAL_DATE_FIELD
} from './constants';

export default combineValidators({
  [ACCOUNT_FORM_NAME_FIELD]: required('name'),
  [ACCOUNT_FORM_BALANCE_FIELD]: composeValidators(required, number, range(0))('balance'),
  [ACCOUNT_FORM_INITIAL_DATE_FIELD]: required('initial date')
});
