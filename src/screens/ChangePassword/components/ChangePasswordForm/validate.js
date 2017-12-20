import { Validator } from 'src/lib/index';

export default Validator.combineValidators({
    oldPassword: {
        fieldName: 'old password',
        validators: Validator.required
    },
    password: {
        fieldName: 'password',
        validators: [Validator.required, Validator.password]
    },
    passwordConfirmation: {
        fieldName: 'password confirmation',
        validators: Validator.required
    }
});
