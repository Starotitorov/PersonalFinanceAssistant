import { connect } from 'react-redux';
import { logIn } from 'src/actions/authorization';
import LogInScreen from './LogInScreen';

const mapDispatchToProps = dispatch => {
    return {
        onLogInUser({ email, password }) {
            dispatch(logIn(email, password));
        }
    }
};

export default connect(null, mapDispatchToProps)(LogInScreen);
