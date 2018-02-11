import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';

export default function CategoryTabsScreenView(WrappedComponent) {
    return function({ addCategory }) {
        return (
            <View style={styles.container}>
                <WrappedComponent />
                <ActionButton.Button
                    type={ActionButton.types.ADD}
                    onPress={addCategory}
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
