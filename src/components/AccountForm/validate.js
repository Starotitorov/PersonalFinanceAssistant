import { Validator } from 'src/lib/index';

export default Validator.combineValidators({
    name: Validator.required,
    balance: [Validator.required, Validator.number],
    initialDate: Validator.required
});
