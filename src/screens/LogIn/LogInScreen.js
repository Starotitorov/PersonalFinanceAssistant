/*
 * LogInScreen.js
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

import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import LogInForm from './components/LogInForm';
import FacebookLoginBtn from './components/FacebookLoginBtn';
import Logo from './components/Logo';
import styles from './LogInScreenStyles';

const LogInScreen = ({ logIn, logInFacebook, handleNewUser }) =>
  <View style={ styles.container }>
    <Logo style={ styles.logo } />
    <View style={ styles.content }>
      <LogInForm onSubmit={ logIn } />
      <TouchableOpacity style={ styles.newUserBtn } onPress={ handleNewUser }>
        <Text style={ styles.newUserLabel }>I am a new user</Text>
      </TouchableOpacity>
      <Text style={ styles.or }>or</Text>
      <FacebookLoginBtn onLoginSuccess={ logInFacebook } />
    </View>
  </View>;

LogInScreen.propTypes = {
  logIn: PropTypes.func,
  logInFacebook: PropTypes.func,
  handleNewUser: PropTypes.func
};

export default LogInScreen;
