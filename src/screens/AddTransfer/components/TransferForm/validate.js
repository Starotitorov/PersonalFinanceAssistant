import { composeValidators, combineValidators } from 'revalidate';
import { required, number } from '../../../../utils/validators';
import {
  TRANSFER_FORM_FROM_ACCOUNT_ID_FIELD,
  TRANSFER_FORM_TO_ACCOUNT_ID_FIELD,
  TRANSFER_FORM_VALUE_FIELD,
  TRANSFER_FORM_EXCHANGE_RATE_FIELD,
  TRANSFER_FORM_DATE_FIELD
} from './constants';

export default combineValidators({
  [TRANSFER_FORM_FROM_ACCOUNT_ID_FIELD]: required('from account'),
  [TRANSFER_FORM_TO_ACCOUNT_ID_FIELD]: required('to account'),
  [TRANSFER_FORM_VALUE_FIELD]: composeValidators(required, number)('sum'),
  [TRANSFER_FORM_EXCHANGE_RATE_FIELD]: number('exchange rate'),
  [TRANSFER_FORM_DATE_FIELD]: required('date')
});
