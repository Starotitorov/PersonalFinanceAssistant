import React, { Component } from 'react';
import { View, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
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
      const { show, handleHide, icons=[] } = this.props;

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
