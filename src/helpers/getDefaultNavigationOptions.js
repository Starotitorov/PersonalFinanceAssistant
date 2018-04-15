import { StyleSheet } from 'react-native';
import { colors } from 'src/styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.COLOR_PRIMARY
  },
  title: {
    color: colors.COLOR_WHITE
  }
});

const getDefaultNavigationOptions = () => ({
  headerStyle: styles.header,
  headerTitleStyle: styles.title,
  headerTintColor: colors.COLOR_WHITE
});

export default getDefaultNavigationOptions;
