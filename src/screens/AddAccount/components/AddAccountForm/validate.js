import { Validator } from 'src/lib';

export default Validator.combineValidators({
    name: Validator.required,
    balance: [Validator.required, Validator.number],
    initialDate: Validator.required
});
