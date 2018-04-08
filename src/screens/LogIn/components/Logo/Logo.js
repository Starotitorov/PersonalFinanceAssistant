import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { Image, View } from 'react-native';
import styles from './LogoStyles';

const Logo = ({ style }) =>
    <View style={[styles.container, style]}>
        <Image style={styles.image} source={require('../../../../../assets/money.png')} />
        <Text h4>Personal Finance Assistant</Text>
    </View>

Logo.propTypes = {
    style: PropTypes.any
};

export default Logo;

