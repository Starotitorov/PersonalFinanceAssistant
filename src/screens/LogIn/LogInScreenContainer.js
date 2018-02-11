import { connect } from 'react-redux';
import { logIn, logInFacebook, handleNewUser } from './actions';
import LogInScreen from './LogInScreen';

export default connect(
    null,
    { logIn, logInFacebook, handleNewUser }
)(LogInScreen);
