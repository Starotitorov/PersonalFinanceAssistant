import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PrimaryButton } from 'src/components';
import { margins, fontSizes } from 'src/styles';
import { Gravatar } from 'react-native-gravatar';

export default function SettingsScreen({ user, logout, handleChangePassword }) {
    const userName = user ? user.name : '';
    const userEmail = user ? user.email : '';

    return (
        <View style={styles.container}>
            <Gravatar
                options={{
                    email: userEmail,
                    parameters: { size: '200' },
                    secure: true
                }}
                style={styles.gravatar}
            />
            <Text style={styles.userName}>{userName}</Text>
            <PrimaryButton
                containerViewStyle={styles.button}
                title="Change password"
                onPress={handleChangePassword}
            />
            <PrimaryButton
                containerViewStyle={styles.button}
                title="Log out"
                onPress={logout}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    userName: {
        fontWeight: 'bold',
        fontSize: fontSizes.FONT_SIZE_XL,
        marginBottom: margins.MARGIN_L
    },
    button: {
        marginBottom: margins.MARGIN_M
    },
    gravatar: {
        width: 200,
        height: 200,
        marginTop: margins.MARGIN_L,
        marginBottom: margins.MARGIN_M
    }
});
