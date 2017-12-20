import { Validator } from 'src/lib/index';

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
        fieldName: 'initial balance',
        validators: Validator.required
    }
});
