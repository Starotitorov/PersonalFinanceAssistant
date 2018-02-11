import { connect } from 'react-redux';
import { changePassword } from './actions';
import ChangePasswordScreen from './ChangePasswordScreen';

export default connect(null, { changePassword })(ChangePasswordScreen);
