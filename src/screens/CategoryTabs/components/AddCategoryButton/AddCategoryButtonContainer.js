import { withHandlers, compose } from 'recompose';
import { NavigationActions, withNavigation } from 'react-navigation';
import AddCategoryButton from './AddCategoryButton';

export default compose(
  withNavigation,
  withHandlers({
    addCategory: ({ navigation }) => () => {
      navigation.dispatch(NavigationActions.navigate({
        routeName: 'AddCategory'
      }));
    }
  })
)(AddCategoryButton);
