import { StyleSheet } from 'react-native';
import { margins } from 'src/styles';

export default StyleSheet.create({
  arrow: {
    marginRight: margins.MARGIN_M,
    fontSize: 18
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
  categoryName: {
    fontSize: 14
  },
  transactionsSum: {
    marginLeft: 10,
    fontSize: 14
  },
  rightText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 120
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: margins.MARGIN_S
  }
});
