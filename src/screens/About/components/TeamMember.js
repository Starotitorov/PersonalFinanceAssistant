import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import styles from './TeamMemberStyles';

const TeamMember = ({ user }) =>
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

TeamMember.propTypes = {
    user: PropTypes.shape({})
};

export default TeamMember;
