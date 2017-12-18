import { Validator } from 'src/lib/index';

export default Validator.combineValidators({
    fromAccountId: Validator.required,
    toAccountId: Validator.required,
    value: [Validator.required, Validator.number],
    exchangeRate: Validator.number,
    date: Validator.required
});
