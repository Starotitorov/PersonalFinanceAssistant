import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  subItemContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#F2F2F2',
    borderBottomColor: 'darkgray',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  subItemMain: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 4
  },
  subItemNote: {
    fontStyle: 'italic'
  },
  subItemDateContainer: {
    flex: 1
  }
});
