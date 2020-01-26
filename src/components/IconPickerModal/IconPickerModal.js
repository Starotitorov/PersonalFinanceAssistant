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
import chunk from 'lodash/chunk';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import icons from './icons';
import styles from './IconPickerModalStyles';

const ICON_SIZE = 24;
const COL_LENGTH = 5;

export default class IconPickerModal extends Component {
    handleIconPick = (iconName) => {
      this.props.onIconPick(iconName);
      this.props.handleHide();
    };

    renderIcons = (icons, onPress) => {
      const iconChunks = chunk(icons, COL_LENGTH);

      return iconChunks.map((chunk, index) => (
        <Col key={ index }>
          {
            chunk.map((icon, index) => (
              <Row key={ index }>
                <Icon
                  containerStyle={ styles.iconContainer }
                  name={ icon }
                  fontSize={ ICON_SIZE }
                  type="material-community"
                  onPress={ () => onPress(icon) } />
              </Row>
            ))
          }
        </Col>
      ));
    }

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
                <Grid>
                  {this.renderIcons(icons, this.handleIconPick)}
                </Grid>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      );
    }
}
