import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';

export default function CategoryTabsScreenView(WrappedComponent) {
    return class extends Component {
        componentDidMount() {
            this.props.onFetch();
        }

        render() {
            return (
                <View style={styles.container}>
                    <WrappedComponent/>
                    <ActionButton.Button
                        type={ActionButton.types.ADD}
                        onPress={this.props.onAddCategory}
                    />
                </View>
            );
        };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
