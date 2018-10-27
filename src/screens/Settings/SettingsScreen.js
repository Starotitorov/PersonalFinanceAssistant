/*
 * SettingsScreen.js
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
