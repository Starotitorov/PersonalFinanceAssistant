import { Validator } from 'src/utils';

export default Validator.combineValidators({
    accountId: {
        fieldName: 'account',
        validators: Validator.required
    },
    categoryId: {
        fieldName: 'category',
        validators: Validator.required
    },
    value: {
        fieldName: 'sum',
        validators: [Validator.required, Validator.number]
    },
    date: {
        fieldName: 'date',
        validators: Validator.required
    }
});
