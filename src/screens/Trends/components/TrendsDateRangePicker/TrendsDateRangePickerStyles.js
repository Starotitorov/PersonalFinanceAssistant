import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  pickersContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pickerStyle: {
    width: '45%'
  },
  button: {
    alignSelf: 'flex-start',
    width: '45%',
    marginTop: 8,
    marginLeft: 0
  },
  buttonInner: {
    paddingTop: 8,
    paddingBottom: 8
  }
});
