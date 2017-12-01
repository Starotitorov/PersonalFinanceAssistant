import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from 'src/styles';
import Spinner from 'react-native-spinkit';

export default function withLoadingIndicator(WrappedComponent, size=40) {
    return function({ isLoading, ...rest }) {
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <Spinner
                        color={colors.COLOR_PRIMARY}
                        size={size}
                        type="Circle"
                    />
                </View>
            );
        }

        return (
            <WrappedComponent {...rest} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
