import { StyleSheet } from 'react-native';
import { margins } from 'src/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newUserBtn: {
        marginVertical: 12
    },
    newUserLabel: {
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
    or: {
        marginBottom: 12
    },
    logo: {
        alignSelf: 'center',
        marginBottom: margins.MARGIN_XL
    }
});
