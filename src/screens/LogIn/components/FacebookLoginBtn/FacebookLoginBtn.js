import React from 'react';
import { Button } from 'react-native';
import FacebookLoginBtnView from './FacebookLoginBtnView';

function FacebookLoginBtn({ onLogin }) {
    return (
        <Button
            onPress={onLogin}
            title="Log in with Facebook"
        />
    );
}

export default FacebookLoginBtnView(FacebookLoginBtn);
