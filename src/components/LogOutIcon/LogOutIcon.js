import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { logout } from 'src/actions/authorization';

function LogOutIcon({ logout }) {
    return (
        <Icon.Button
            name="md-log-out"
            color="gray"
            backgroundColor="transparent"
            onPress={logout}
        />
    );
}

export default connect(null, { logout })(LogOutIcon);
