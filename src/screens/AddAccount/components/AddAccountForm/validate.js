import { Validator } from 'src/lib';

export default Validator.combineValidators({
    name: Validator.required,
    initialBalance: [Validator.required, Validator.number],
    initialDate: Validator.required
});
