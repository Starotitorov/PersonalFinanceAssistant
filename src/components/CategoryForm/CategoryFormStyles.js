import { StyleSheet } from 'react-native';
import { margins } from 'src/styles';

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
  flexGrow: {
    flexGrow: 1
  },
  fields: {
    marginBottom: 50
  },
  icon: {
    marginRight: margins.MARGIN_M
  }
});
