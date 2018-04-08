import { withHandlers } from 'recompose';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import config from 'src/config';
import { alerts } from 'src/utils';
import FacebookLoginBtn from './FacebookLoginBtn';

const withHandleLogin = withHandlers({
    handleLogin: ({ onLoginSuccess }) => () => {
        LoginManager.setLoginBehavior(config.facebookLoginBehaviour);

        LoginManager.logInWithReadPermissions([ 'public_profile', 'email' ]).then(
            result => {
                if (result.isCancelled) {
                    alerts.showFacebookLoginCancelledAlert();
                } else {
                    AccessToken.getCurrentAccessToken()
                        .then(onLoginSuccess);
                }
            },
            error => alerts.showFacebookLoginErrorAlert(error)
        );
    }
});

export default withHandleLogin(FacebookLoginBtn);
