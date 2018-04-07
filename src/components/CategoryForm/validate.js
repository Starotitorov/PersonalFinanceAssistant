import { Validator } from 'src/utils';
import { CATEGORY_FORM_NAME_FIELD } from './constants'

export default Validator.combineValidators({
    [CATEGORY_FORM_NAME_FIELD]: {
        fieldName: 'name',
        validators: Validator.required
    }
});
