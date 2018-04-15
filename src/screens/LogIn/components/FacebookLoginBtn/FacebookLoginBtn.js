import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-native-elements';
import styles from './FacebookLoginBtnStyles';

const FacebookLoginBtn = ({ handleLogin }) =>
  <SocialIcon
    title="Log In With Facebook"
    button
    type="facebook"
    iconSize={ 18 }
    style={ styles.button }
    onPress={ handleLogin } />;

FacebookLoginBtn.propTypes = {
  handleLogin: PropTypes.func
};

export default FacebookLoginBtn;
