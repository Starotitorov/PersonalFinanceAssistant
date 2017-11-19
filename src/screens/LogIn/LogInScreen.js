import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogInForm from './components/LogInForm';

export default function LogInScreen({ onLogInUser }) {
    return (
        <View style={styles.container}>
            <LogInForm onSubmit={onLogInUser}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
