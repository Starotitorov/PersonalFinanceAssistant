import { Validator } from 'src/utils';

export default Validator.combineValidators({
    name: {
        fieldName: 'name',
        validators: Validator.required
    },
    balance: {
        fieldName: 'balance',
        validators: [Validator.required, Validator.number, Validator.range(1)]
    },
    initialDate: {
        fieldName: 'initial date',
        validators: Validator.required
    }
});
