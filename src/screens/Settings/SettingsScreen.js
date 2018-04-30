import React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';
import { Gravatar } from 'react-native-gravatar';
import styles from './SettingsScreenStyles';

export default function SettingsScreen({ user, logout, handleChangePassword }) {
  const userEmail = user ? user.email : '';

  return (
    <View>
      <Card containerStyle={ styles.profileCardContainer } wrapperStyle={ styles.profileCard }>
        <Gravatar
          options={{
            email: userEmail,
            parameters: { size: '200' },
            secure: true
          }}
          style={ styles.gravatar } />
        <Text style={ styles.userName }>{ userEmail }</Text>
      </Card>
      <List>
        <ListItem title="Change password" titleStyle={ styles.changePassword } onPress={ handleChangePassword } />
      </List>
      <List>
        <ListItem titleStyle={ styles.logout } title="Log out" hideChevron onPress={ logout } />
      </List>
    </View>
  );
}
