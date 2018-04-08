import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import LogInForm from './components/LogInForm';
import FacebookLoginBtn from './components/FacebookLoginBtn';
import Logo from './components/Logo';
import styles from './LogInScreenStyles';

const LogInScreen = ({ logIn, logInFacebook, handleNewUser }) =>
    <View style={styles.container}>
        <Logo style={styles.logo} />
        <LogInForm onSubmit={logIn}/>
        <TouchableOpacity style={styles.newUserBtn} onPress={handleNewUser}>
            <Text style={styles.newUserLabel}>I am a new user</Text>
        </TouchableOpacity>
        <Text style={styles.or}>or</Text>
        <FacebookLoginBtn onLoginSuccess={logInFacebook}/>
    </View>

LogInScreen.propTypes = {
    logIn: PropTypes.func,
    logInFacebook: PropTypes.func,
    handleNewUser: PropTypes.func
};

export default LogInScreen;
