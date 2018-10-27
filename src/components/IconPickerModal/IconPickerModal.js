/*
 * IconPickerModal.js
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
import { View, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import icons from './icons';
import styles from './IconPickerModalStyles';

const ICON_SIZE = 24;

export default class IconPickerModal extends Component {
    handleIconPick = (iconName) => {
      this.props.onIconPick(iconName);
      this.props.handleHide();
    };

    renderIcons = (icons, onPress) => icons.map((icon, index) => (
      <Icon
        containerStyle={ styles.iconContainer }
        key={ index }
        name={ icon }
        fontSize={ ICON_SIZE }
        type="material-community"
        onPress={ () => onPress(icon) } />
    ));

    render() {
      const { show, handleHide } = this.props;

      return (
        <Modal
          transparent
          visible={ show }
          animationType="fade"
          onRequestClose={ handleHide }>
          <TouchableWithoutFeedback onPress={ handleHide }>
            <View style={ styles.container }>
              <View style={ styles.iconsOuterContainer }>
                <ScrollView contentContainerStyle={ styles.iconsInnerContainer }>
                  {this.renderIcons(icons, this.handleIconPick)}
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      );
    }
}
