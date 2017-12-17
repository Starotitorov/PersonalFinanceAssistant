import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import { margins, fontSizes } from 'src/styles';

export default function TeamMember({ user }) {
    return (
        <View style={styles.user}>
            <Gravatar
                options={{
                    email: user.email,
                    parameters: { size: '50' },
                    secure: true
                }}
                style={styles.gravatar}
            />
            <Text style={styles.name}>{user.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: margins.MARGIN_S
    },
    name: {
        fontSize: fontSizes.FONT_SIZE_M
    },
    gravatar: {
        width: 50,
        height: 50,
        marginRight: margins.MARGIN_S
    }
});

