import { Validator } from 'src/utils';

export default Validator.combineValidators({
    name: {
        fieldName: 'name',
        validators: Validator.required
    }
});
