import { Validator } from 'src/utils';

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
