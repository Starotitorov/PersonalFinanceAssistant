import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import SignUpForm from './components/SignUpForm';

export default function LogInScreen({ onSignUpUser, onHaveAccount }) {
    return (
        <View style={styles.container}>
            <SignUpForm onSubmit={onSignUpUser}/>
            <TouchableOpacity style={styles.haveAccountBtn} onPress={onHaveAccount}>
                <Text style={styles.haveAccountLabel}>Already have an account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    haveAccountBtn: {
        marginVertical: 12
    },
    haveAccountLabel: {
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    }
});
