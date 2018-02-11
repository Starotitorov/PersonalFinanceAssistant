import { Validator } from 'src/utils';

export default Validator.combineValidators({
    fromAccountId: {
        fieldName: 'from account',
        validators: Validator.required
    },
    toAccountId: {
        fieldName: 'to account',
        validators: Validator.required
    },
    value: {
        fieldName: 'sum',
        validators: [Validator.required, Validator.number]
    },
    exchangeRate: {
        fieldName: 'exchange rate',
        validators: Validator.number
    },
    date: {
        fieldName: 'date',
        validators: Validator.required
    }
});
