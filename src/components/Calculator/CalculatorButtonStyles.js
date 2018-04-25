import { StyleSheet } from 'react-native';
import { colors } from 'src/styles';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0
  },
  containerButtonStyle: {
    marginLeft: 0,
    marginRight: 0,
    borderColor: 'darkgray',
    borderWidth: StyleSheet.hairlineWidth
  },
  buttonStyle: {
    height: 48,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: colors.COLOR_WHITE
  }
});

export default styles;
