import React, { Component } from 'react';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { alerts } from 'src/utils';

export default function FacebookLoginBtnView(WrappedComponent) {
    return class extends Component {
        handleLoginFinish = (error, result) => {
            const { onLoginSuccess } = this.props;

            if (error) {
                alerts.showFacebookLoginErrorAlert(error);
            } else if (result.isCancelled) {
                alerts.showFacebookLoginCancelledAlert();
            } else {
                AccessToken.getCurrentAccessToken()
                    .then(onLoginSuccess);
            }
        };

        render() {
            return (
                <WrappedComponent onLoginFinish={this.handleLoginFinish} />
            );
        }
    }
}
