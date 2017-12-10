import { StyleSheet } from 'react-native';
import { colors } from 'src/styles';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.COLOR_PRIMARY
    },
    button: {
        fontSize: 16
    },
    periodContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});