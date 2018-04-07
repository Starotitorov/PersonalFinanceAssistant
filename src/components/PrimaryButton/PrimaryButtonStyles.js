import { StyleSheet } from 'react-native'
import { colors } from 'src/styles';

export default StyleSheet.create({
    buttonContainer: {
        margin: 0,
        minWidth: 200,
        borderRadius: 20
    },
    button: {
        backgroundColor: colors.COLOR_PRIMARY,
        borderRadius: 20
    },
    disabledStyle: {
        backgroundColor: 'darkgrey'
    }
});
