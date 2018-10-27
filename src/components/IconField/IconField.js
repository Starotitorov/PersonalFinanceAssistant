/*
 * IconField.js
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

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import IconPickerModal from '../IconPickerModal';
import styles from './IconFieldStyles';

export default class IconField extends Component {
    state = {
      isVisible: false
    };

    toggleModal = () => {
      this.setState({ isVisible: !this.state.isVisible });
    };

    render() {
      const { input, style } = this.props;

      return (
        <View style={ style }>
          <TouchableOpacity onPress={ this.toggleModal }>
            <View style={ styles.container }>
              <Icon
                iconStyle={ styles.icon }
                name={ input.value || 'gesture-tap' }
                type="material-community" />
            </View>
          </TouchableOpacity>
          <IconPickerModal
            handleHide={ this.toggleModal }
            show={ this.state.isVisible }
            onIconPick={ input.onChange } />
        </View>
      );
    }
}
