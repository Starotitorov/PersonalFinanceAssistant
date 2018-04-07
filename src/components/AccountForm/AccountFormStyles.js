import { StyleSheet } from 'react-native'
import { margins } from 'src/styles'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        width: 300
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    fields: {
        marginBottom: 50
    },
    flexGrow: {
        flexGrow: 1
    },
    icon: {
        marginRight: margins.MARGIN_M
    }
});
