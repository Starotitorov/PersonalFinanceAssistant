import React from 'react';
import { View, Text } from 'react-native';
import { PrimaryButton } from 'src/components';
import { Gravatar } from 'react-native-gravatar';
import styles from './SettingsScreenStyles';

export default function SettingsScreen({ user, logout, handleChangePassword }) {
  const userName = user ? user.name : '';
  const userEmail = user ? user.email : '';

  return (
    <View style={ styles.container }>
      <Gravatar
        options={{
          email: userEmail,
          parameters: { size: '200' },
          secure: true
        }}
        style={ styles.gravatar } />
      <Text style={ styles.userName }>{userName}</Text>
      <PrimaryButton
        containerViewStyle={ styles.button }
        title="Change password"
        onPress={ handleChangePassword } />
      <PrimaryButton
        containerViewStyle={ styles.button }
        title="Log out"
        onPress={ logout } />
    </View>
  );
}
