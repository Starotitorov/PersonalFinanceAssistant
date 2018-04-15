import { StyleSheet } from 'react-native';
import { margins } from 'src/styles';

export default StyleSheet.create({
  arrow: {
    marginRight: margins.MARGIN_M
  },
  mainContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1
  },
  transactionsSum: {
    marginLeft: 10
  },
  subItemContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#aaa'
  },
  subItemDateContainer: {
    flex: 1
  },
  rightText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100
  }
});
