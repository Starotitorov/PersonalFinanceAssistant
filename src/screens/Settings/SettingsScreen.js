import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { margins, fontSizes, colors } from 'src/styles';
import { Gravatar } from 'react-native-gravatar';

export default function SettingsScreen({ user, onLogout }) {
    const userName = user ? user.name : '';
    const userEmail = user ? user.email : '';

    return (
        <View style={styles.container}>
            <Gravatar
                options={{
                    email: userEmail,
                    parameters: { size: '200', d: 'mm' },
                    secure: true
                }}
                style={styles.gravatar}
            />
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
        marginBottom: margins.MARGIN_L
    },
    gravatar: {
        width: 200,
        height: 200,
        marginTop: margins.MARGIN_L,
        marginBottom: margins.MARGIN_M
    }
});
