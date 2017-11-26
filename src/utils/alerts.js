import { Alert } from 'react-native';

export const showFacebookLoginErrorAlert = (error) => {
    Alert.alert(
        'Facebook login',
        `Facebook login has error: ${error}`,
        [
            { text: 'OK' }
        ]
    );
};

export const showFacebookLoginCancelledAlert = () => {
    Alert.alert(
        'Facebook login',
        `Facebook login is cancelled`,
        [
            { text: 'OK' }
        ]
    );
};
