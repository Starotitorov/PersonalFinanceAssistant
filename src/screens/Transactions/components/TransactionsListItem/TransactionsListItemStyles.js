import { StyleSheet } from 'react-native';
import { margins } from 'src/styles';

export default StyleSheet.create({
  arrow: {
    marginRight: margins.MARGIN_M,
    fontSize: 18
  },
  groupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
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
    alignSelf: 'flex-end',
    width: 135
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: margins.MARGIN_S
  }
});
