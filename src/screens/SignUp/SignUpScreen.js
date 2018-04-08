import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import SignUpForm from './components/SignUpForm';
import styles from './SignUpScreenStyles';

export default function LogInScreen({ signUp, handleHaveAccount }) {
    return (
        <View style={styles.container}>
            <SignUpForm onSubmit={signUp}/>
            <TouchableOpacity style={styles.haveAccountBtn} onPress={handleHaveAccount}>
                <Text style={styles.haveAccountLabel}>Already have an account</Text>
            </TouchableOpacity>
        </View>
    );
}
