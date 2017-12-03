import { connect } from 'react-redux';
import { fetchCategories } from 'src/actions/categories';
import { NavigationActions } from 'react-navigation';
import CategoryTabsScreen from './CategoryTabsScreen';
import CategoryTabsScreenView from './CategoryTabsScreenView';

const mapDispatchToProps = dispatch => {
    return {
        onAddCategory() {
            dispatch(NavigationActions.navigate({routeName: 'AddCategory'}));
        },

        onFetch() {
            dispatch(fetchCategories());
        }
    }
};

export default connect(null, mapDispatchToProps)(CategoryTabsScreenView(CategoryTabsScreen));
