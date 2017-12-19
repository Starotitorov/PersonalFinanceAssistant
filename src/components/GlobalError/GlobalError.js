import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from 'src/styles';

export default function GlobalError({ message, style }) {
    return <Text style={[styles.error, style]}>{ message }</Text>
}

const styles = StyleSheet.create({
    error: {
        color: colors.COLOR_RED
    }
});
