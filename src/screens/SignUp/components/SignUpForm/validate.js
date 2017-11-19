import { Validator } from 'src/lib';

export default Validator.combineValidators({
    name: Validator.required,
    email: [Validator.email, Validator.required],
    password: Validator.required,
    passwordConfirmation: Validator.required
});
