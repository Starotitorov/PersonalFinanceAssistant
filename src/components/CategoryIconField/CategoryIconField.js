import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import IconPickerModal from '../IconPickerModal';
import styles from './CategoryIconFieldStyles';

export default class CategoryIconField extends Component {
    state = {
        isVisible: false
    };

    toggleModal = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };

    render() {
        const { input } = this.props;

        return (
            <View>
                <TouchableOpacity onPress={this.toggleModal}>
                    <View style={styles.container}>
                        <Icon
                            iconStyle={styles.icon}
                            name={input.value}
                            type="material-community"
                        />
                    </View>
                </TouchableOpacity>
                <IconPickerModal
                    handleHide={this.toggleModal}
                    onIconPick={input.onChange}
                    show={this.state.isVisible}
                />
            </View>
        );
    }
}