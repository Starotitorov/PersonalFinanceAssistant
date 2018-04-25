import { StyleSheet } from 'react-native';
import { margins } from 'src/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  fields: {
    marginLeft: 0,
    marginRight: 0
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flexGrow: {
    flexGrow: 1
  },
  icon: {
    marginRight: margins.MARGIN_M
  }
});
