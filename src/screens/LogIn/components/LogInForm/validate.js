import { Validator } from 'src/lib';

export default Validator.combineValidators({
    email: {
        fieldName: 'email',
        validators: Validator.required
    },
    password: {
        fieldName: 'password',
        validators: Validator.required
    }
});
