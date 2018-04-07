import { Validator } from 'src/utils';
import {
    ACCOUNT_FORM_BALANCE_FIELD,
    ACCOUNT_FORM_NAME_FIELD,
    ACCOUNT_FORM_INITIAL_DATE_FIELD
} from './constants'

export default Validator.combineValidators({
    [ACCOUNT_FORM_NAME_FIELD]: {
        fieldName: 'name',
        validators: Validator.required
    },
    [ACCOUNT_FORM_BALANCE_FIELD]: {
        fieldName: 'balance',
        validators: [Validator.required, Validator.number, Validator.range(1)]
    },
    [ACCOUNT_FORM_INITIAL_DATE_FIELD]: {
        fieldName: 'initial date',
        validators: Validator.required
    }
});
