import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LogInForm from './components/LogInForm';
import FacebookLoginBtn from './components/FacebookLoginBtn';
import {
    LoginButton,
    AccessToken
} from 'react-native-fbsdk';
import { alerts } from 'src/utils'

export default function LogInScreen({ onLogInUser, onNewUser, onLoginFacebook }) {
    return (
        <View style={styles.container}>
            <LogInForm onSubmit={onLogInUser}/>
            <TouchableOpacity style={styles.newUserBtn} onPress={onNewUser}>
                <Text style={styles.newUserLabel}>I am a new user</Text>
            </TouchableOpacity>
            <Text style={styles.or}>or</Text>
            <FacebookLoginBtn onLoginSuccess={onLoginFacebook}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newUserBtn: {
        marginVertical: 12
    },
    newUserLabel: {
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
    or: {
        marginBottom: 12
    }
});
