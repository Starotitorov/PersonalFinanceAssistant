import { combineValidators, composeValidators } from 'revalidate';
import { required, email, password, match } from '../../../../utils/validators';

export default combineValidators({
    name: required('name'),
    email: composeValidators(required, email)('email'),
    password: composeValidators(required, password)('password'),
    password_confirmation: composeValidators(required, match('password'))('password confirmation')
});
