import React, { Component } from 'react';
import { View, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import icons from './icons';
import styles from './IconPickerModalStyles';

export default class IconPickerModal extends Component {
    handleIconPick = (iconName) => {
        this.props.onIconPick(iconName);
        this.props.handleHide();
    };

    renderIcons(icons, onPress) {
        return icons.map((icon, index) => {
            const onIconPress = onPress.bind(null, icon);

            return (
                <Icon
                    containerStyle={styles.iconContainer}
                    key={index}
                    name={icon}
                    onPress={onIconPress}
                    type="material-community"
                />
            );
        });
    };

    render() {
        const { show, handleHide } = this.props;

        return (
            <Modal
                transparent
                visible={show}
                onRequestClose={handleHide}
                animationType="fade"
            >
                <TouchableWithoutFeedback onPress={handleHide}>
                    <View style={styles.container}>
                        <View style={styles.iconsOuterContainer}>
                            <ScrollView contentContainerStyle={styles.iconsInnerContainer}>
                                {this.renderIcons(icons, this.handleIconPick)}
                            </ScrollView>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}
