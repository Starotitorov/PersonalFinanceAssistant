import { StyleSheet } from 'react-native';
import { margins, fontSizes } from 'src/styles';

export default StyleSheet.create({
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: margins.MARGIN_S
    },
    name: {
        fontSize: fontSizes.FONT_SIZE_M
    },
    gravatar: {
        width: 50,
        height: 50,
        marginRight: margins.MARGIN_S
    }
});
