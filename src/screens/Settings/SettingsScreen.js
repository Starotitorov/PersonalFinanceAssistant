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
import { NavigationActions } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import { Gravatar } from 'react-native-gravatar';
import { Card } from 'src/components';
import styles from './SettingsScreenStyles';

export default function SettingsScreen({ user, logout, navigation }) {
  const userEmail = user ? user.email : '';
  const handleChangePassword = () => {
    navigation.dispatch(
      NavigationActions.navigate({ routeName: 'ChangePassword' })
    );
  };

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
        <ListItem
          title="Change password"
          titleStyle={ styles.changePassword }
          hideChevron
          onPress={ handleChangePassword } />
      </List>
      <List>
        <ListItem
          titleStyle={ styles.logout }
          title="Sign out"
          hideChevron
          onPress={ logout } />
      </List>
    </View>
  );
}
