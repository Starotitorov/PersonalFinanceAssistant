import { combineValidators } from 'revalidate';
import { required } from '../../utils/validators';
import { CATEGORY_FORM_NAME_FIELD } from './constants';

export default combineValidators({
  [CATEGORY_FORM_NAME_FIELD]: required('name')
});
