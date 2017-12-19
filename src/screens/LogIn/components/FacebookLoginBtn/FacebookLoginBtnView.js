import React, { Component } from 'react';
import { Platform } from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import config from 'src/config';
import { alerts } from 'src/utils';

const isAndroid = Platform.OS === 'android';

export default function FacebookLoginBtnView(WrappedComponent) {
    return class extends Component {
        handleLogin = () => {
            const { onLoginSuccess } = this.props;

            LoginManager.setLoginBehavior(config.facebookLoginBehaviour);

            LoginManager.logInWithReadPermissions(['public_profile','email']).then(
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
        };

        render() {
            return (
                <WrappedComponent onLogin={this.handleLogin} />
            );
        }
    }
}
