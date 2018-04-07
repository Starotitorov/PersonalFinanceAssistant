import { Validator } from 'src/utils';
import {
    TRANSFER_FORM_FROM_ACCOUNT_ID_FIELD,
    TRANSFER_FORM_TO_ACCOUNT_ID_FIELD,
    TRANSFER_FORM_VALUE_FIELD,
    TRANSFER_FORM_EXCHANGE_RATE_FIELD,
    TRANSFER_FORM_DATE_FIELD
} from './constants'

export default Validator.combineValidators({
    [TRANSFER_FORM_FROM_ACCOUNT_ID_FIELD]: {
        fieldName: 'from account',
        validators: Validator.required
    },
    [TRANSFER_FORM_TO_ACCOUNT_ID_FIELD]: {
        fieldName: 'to account',
        validators: Validator.required
    },
    [TRANSFER_FORM_VALUE_FIELD]: {
        fieldName: 'sum',
        validators: [Validator.required, Validator.number]
    },
    [TRANSFER_FORM_EXCHANGE_RATE_FIELD]: {
        fieldName: 'exchange rate',
        validators: Validator.number
    },
    [TRANSFER_FORM_DATE_FIELD]: {
        fieldName: 'date',
        validators: Validator.required
    }
});
