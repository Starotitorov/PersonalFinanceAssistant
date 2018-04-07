import { Validator } from 'src/utils';
import {
    TRANSACTION_FORM_ACCOUNT_ID_FIELD,
    TRANSACTION_FORM_CATEGORY_ID_FIELD,
    TRANSACTION_FORM_VALUE_FIELD,
    TRANSACTION_FORM_DATE_FIELD
} from './constants'

export default Validator.combineValidators({
    [TRANSACTION_FORM_ACCOUNT_ID_FIELD]: {
        fieldName: 'account',
        validators: Validator.required
    },
    [TRANSACTION_FORM_CATEGORY_ID_FIELD]: {
        fieldName: 'category',
        validators: Validator.required
    },
    [TRANSACTION_FORM_VALUE_FIELD]: {
        fieldName: 'sum',
        validators: [Validator.required, Validator.number]
    },
    [TRANSACTION_FORM_DATE_FIELD]: {
        fieldName: 'date',
        validators: Validator.required
    }
});
