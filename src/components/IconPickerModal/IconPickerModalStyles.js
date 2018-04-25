import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000055'
  },
  iconsOuterContainer: {
    width: 240,
    borderColor: '#888',
    borderWidth: 1,
    backgroundColor: '#ddd',
    alignSelf: 'center'
  },
  iconsInnerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  iconContainer: {
    padding: 5
  }
});
