import { StyleSheet } from 'react-native';
import { margins } from 'src/styles';

export default StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftPart: {
    flexDirection: 'row'
  },
  position: {
    marginRight: margins.MARGIN_XS
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: margins.MARGIN_S
  }
});
