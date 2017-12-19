import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { colors, margins } from 'src/styles';

export default function PrimaryButton({ disabled, onPress, title, containerViewStyle }) {
    return (
        <Button
            containerViewStyle={[styles.buttonContainer, containerViewStyle]}
            buttonStyle={styles.button}
            title={title}
            disabled={disabled}
            onPress={onPress}
        />
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        minWidth: 300,
        borderRadius: 20
    },
    button: {
        backgroundColor: colors.COLOR_PRIMARY,
        borderRadius: 20
    }
});
