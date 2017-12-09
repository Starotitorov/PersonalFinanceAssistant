import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';

export default function CategoryTabsScreenView(WrappedComponent) {
    return function({ onAddCategory }) {
        return (
            <View style={styles.container}>
                <WrappedComponent />
                <ActionButton.Button
                    type={ActionButton.types.ADD}
                    onPress={onAddCategory}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
