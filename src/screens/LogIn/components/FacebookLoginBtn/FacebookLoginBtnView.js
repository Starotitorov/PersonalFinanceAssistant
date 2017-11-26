import React, { Component } from 'react';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { alerts } from 'src/utils';

export default function FacebookLoginBtnView(WrappedComponent) {
    return class extends Component {
        handleLogin = () => {
            const { onLoginSuccess } = this.props;

            LoginManager.setLoginBehavior('web_only');

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
