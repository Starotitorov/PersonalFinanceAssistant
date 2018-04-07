import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const LogOutIcon = ({ logout }) =>
    <Icon.Button
        name="md-log-out"
        color="gray"
        backgroundColor="transparent"
        onPress={logout}
    />

export default LogOutIcon;
