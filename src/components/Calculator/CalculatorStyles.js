import { StyleSheet } from 'react-native';
import { colors } from 'src/styles';

const styles = StyleSheet.create({
  expressionContainerStyle: {
    height: 48,
    padding: 8,
    backgroundColor: 'lightgray'
  },
  expressionStyle: {
    fontSize: 24,
    textAlign: 'right'
  },
  keyboardRowStyle: {
    flexDirection: 'row',
    left: 0,
    right: 0
  },
  keyboardShortRowStyle: {
    flex: 3
  },
  submitButtonContainerStyle: {
    flex: 1
  },
  submitButtonStyle: {
    height: 97,
    backgroundColor: colors.COLOR_PRIMARY,
    borderColor: colors.COLOR_PRIMARY
  }
});

export default styles;
