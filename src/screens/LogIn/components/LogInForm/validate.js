import { required } from '../../../../utils/validators';
import { combineValidators } from 'revalidate';

export default combineValidators({
  email: required('email'),
  password: required('password')
});
