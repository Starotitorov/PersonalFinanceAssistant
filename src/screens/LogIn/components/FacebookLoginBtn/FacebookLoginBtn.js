import React from 'react';
import { StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import FacebookLoginBtnView from './FacebookLoginBtnView';

function FacebookLoginBtn({ onLogin }) {
    return (
        <SocialIcon
            title='Log In With Facebook'
            button
            type='facebook'
            onPress={onLogin}
            iconSize={18}
            style={styles.button}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 24
    }
});

export default FacebookLoginBtnView(FacebookLoginBtn);
