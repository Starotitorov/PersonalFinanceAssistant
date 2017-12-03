import { Validator } from 'src/lib';

export default Validator.combineValidators({
    name: Validator.required,
    initialDate: Validator.required
});
