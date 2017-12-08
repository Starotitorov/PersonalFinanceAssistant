import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { margins, fontSizes, colors } from 'src/styles'

export default function SettingsScreen({ user, onLogout }) {
    const userName = user ? user.name : '';

    return (
        <View style={styles.container}>
            <Text style={styles.userName}>{userName}</Text>
            <Button
                containerViewStyle={styles.buttonContainer}
                buttonStyle={styles.button}
                title="Log out"
                onPress={onLogout}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 300
    },
    button: {
        backgroundColor: colors.COLOR_PRIMARY
    },
    userName: {
        fontWeight: 'bold',
        fontSize: fontSizes.FONT_SIZE_XL,
        marginVertical: margins.MARGIN_L
    }
});
