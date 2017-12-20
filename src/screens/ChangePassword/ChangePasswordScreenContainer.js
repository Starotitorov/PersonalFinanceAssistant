import { connect } from 'react-redux';
import { changePassword } from 'src/actions/authorization';
import ChangePasswordScreen from './ChangePasswordScreen';

export default connect(null, { changePassword })(ChangePasswordScreen);
