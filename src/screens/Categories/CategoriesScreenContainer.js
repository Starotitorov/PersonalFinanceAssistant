import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import CategoriesScreen from './CategoriesScreen';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCategory() {
            dispatch(NavigationActions.navigate({
                routeName: 'AddCategory'
            }));
        }
    };
};

export default connect(null, mapDispatchToProps)(CategoriesScreen);