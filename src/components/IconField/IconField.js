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
      const { input, style, icons } = this.props;

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
            icons={ icons }
            handleHide={ this.toggleModal }
            show={ this.state.isVisible }
            onIconPick={ input.onChange } />
        </View>
      );
    }
}
