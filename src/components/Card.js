import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { defaultProps } from 'recompose';

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 0,
    marginLeft: 0
  },
});

export default defaultProps({
  containerStyle: styles.containerStyle,
})(Card);
