import { Validator } from 'src/lib';

export default Validator.combineValidators({
    name: {
        fieldName: 'name',
        validators: Validator.required
    }
});
