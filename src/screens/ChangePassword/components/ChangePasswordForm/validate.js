import { combineValidators, composeValidators } from 'revalidate';
import { required, password, match } from '../../../../utils/validators';

export default combineValidators({
  oldPassword: required('old password'),
  password: composeValidators(required, password)('password'),
  passwordConfirmation: composeValidators(required, match('password'))('password confirmation')
});
