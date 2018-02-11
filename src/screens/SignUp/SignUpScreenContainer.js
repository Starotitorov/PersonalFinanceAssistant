import { connect } from 'react-redux';
import { signUp, handleHaveAccount } from './actions';
import SignUpScreen from './SignUpScreen';

export default connect(null, { signUp, handleHaveAccount })(SignUpScreen);
