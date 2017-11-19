import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { singUp } from 'src/actions/authorization';
import SignUpScreen from './SignUpScreen';

const mapDispatchToProps = dispatch => {
    return {
        onSignUpUser(userData) {
            return dispatch(singUp(userData));
        },

        onHaveAccount() {
            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'LogIn' })
                ]
            }));
        }
    }
};

export default connect(null, mapDispatchToProps)(SignUpScreen);
