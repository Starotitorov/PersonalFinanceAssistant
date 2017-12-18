import { Validator } from 'src/lib/index';

export default Validator.combineValidators({
    accountId: Validator.required,
    categoryId: Validator.required,
    value: [Validator.required, Validator.number],
    date: Validator.required
});
