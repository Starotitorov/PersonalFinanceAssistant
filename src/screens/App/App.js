/*
 * App.js
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
import { StatusBar, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Toast from 'react-native-easy-toast';
import { MenuContext } from 'react-native-popup-menu';
import { PlatformKeyboardAvoidingView } from 'src/components';
import AppNavigator from '../AppNavigator';
import styles from './AppStyles';
import { colors } from 'src/styles';
import { navigationService } from '../../services';

const AppContainer = createAppContainer(AppNavigator);

const App = ({ setToastRef }) =>
  <PlatformKeyboardAvoidingView style={ styles.container }>
    <MenuContext>
      <StatusBar backgroundColor={ colors.COLOR_PRIMARY } barStyle="light-content" />
      <View style={{ flex: 1 }}>
        <AppContainer
          ref={ navigatorRef => {
            navigationService.setTopLevelNavigator(navigatorRef);
          } } />
      </View>
      <Toast ref={ element => setToastRef(element) } position="top" positionValue={ 10 } defaultCloseDelay={ 5000 } />
    </MenuContext>
  </PlatformKeyboardAvoidingView>;

export default App;
