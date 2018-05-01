import { StyleSheet } from 'react-native';
import { colors } from 'src/styles';

export default StyleSheet.create({
  chart: {
    flex: 1
  },
  view: {
    flex: 1,
    marginBottom: 50,
    marginTop: 20,
    paddingTop: 12,
    paddingBottom: 28,
    backgroundColor: colors.COLOR_WHITE,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
