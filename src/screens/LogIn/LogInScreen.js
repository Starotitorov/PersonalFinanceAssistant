import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LogInForm from './components/LogInForm';
import FacebookLoginBtn from './components/FacebookLoginBtn';

export default function LogInScreen({ logIn, logInFacebook, handleNewUser }) {
    return (
        <View style={styles.container}>
            <LogInForm onSubmit={logIn}/>
            <TouchableOpacity style={styles.newUserBtn} onPress={handleNewUser}>
                <Text style={styles.newUserLabel}>I am a new user</Text>
            </TouchableOpacity>
            <Text style={styles.or}>or</Text>
            <FacebookLoginBtn onLoginSuccess={logInFacebook}/>
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
