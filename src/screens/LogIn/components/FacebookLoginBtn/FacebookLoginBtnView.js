/*
 * FacebookLoginBtnView.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { withHandlers } from 'recompose';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import config from 'src/config';
import { alerts } from 'src/utils';
import FacebookLoginBtn from './FacebookLoginBtn';

const withHandleLogin = withHandlers({
  handleLogin: ({ onLoginSuccess }) => () => {
    LoginManager.setLoginBehavior(config.facebookLoginBehaviour);

    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
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
