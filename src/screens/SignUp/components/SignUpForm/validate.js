import { Validator } from 'src/lib';

export default Validator.combineValidators({
    name: {
        fieldName: 'name',
        validators: Validator.required
    },
    email: {
        fieldName: 'email',
        validators: [Validator.email, Validator.required]
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
