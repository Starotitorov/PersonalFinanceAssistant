import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderWidth: StyleSheet.hairlineWidth
    },
    groupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    textContainer: {
        flex: 1
    },
    transactionsSum: {
        marginLeft: 10
    },
    subItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#aaa'
    },
    subItemDateContainer: {
        flex: 1
    }
})