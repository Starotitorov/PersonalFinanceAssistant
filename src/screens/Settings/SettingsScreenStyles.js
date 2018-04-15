import { StyleSheet } from 'react-native';
import { margins, fontSizes } from 'src/styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: fontSizes.FONT_SIZE_XL,
    marginBottom: margins.MARGIN_L
  },
  button: {
    marginBottom: margins.MARGIN_M
  },
  gravatar: {
    width: 200,
    height: 200,
    marginTop: margins.MARGIN_L,
    marginBottom: margins.MARGIN_M
  }
});
