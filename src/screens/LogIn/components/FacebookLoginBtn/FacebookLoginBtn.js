import React from 'react';
import { LoginButton } from 'react-native-fbsdk';
import FacebookLoginBtnView from './FacebookLoginBtnView';

function FacebookLoginBtn({ onLoginFinish }) {
    return (
        <LoginButton onLoginFinished={onLoginFinish} />
    );
}

export default FacebookLoginBtnView(FacebookLoginBtn);
