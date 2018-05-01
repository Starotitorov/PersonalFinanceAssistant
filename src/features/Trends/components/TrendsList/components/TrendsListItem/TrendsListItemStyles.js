import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'darkgray'
  },
  labelStyle: {
    flex: 1,
    fontSize: 16,
    color: 'gray'
  },
  boldTextStyle: {
    fontWeight: 'bold'
  },
  totalsStyle: {
    flex: 1,
    alignItems: 'flex-end'
  },
  incomeStyle: {
    color: 'red'
  },
  expenseStyle: {
    color: 'blue'
  }
});

export default styles;
