import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const FacebookLoginBtn = ({ handleLogin }) =>
    <SocialIcon
        title='Log In With Facebook'
        button
        type='facebook'
        onPress={handleLogin}
        iconSize={18}
        style={styles.button} />

FacebookLoginBtn.propTypes = {
    handleLogin: PropTypes.func
};

export default FacebookLoginBtn;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 24
    }
});
