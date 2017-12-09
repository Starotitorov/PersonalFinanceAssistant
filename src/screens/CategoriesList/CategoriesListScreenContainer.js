import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { selectCategory } from 'src/actions/categories';

const mapDispatchToProps = dispatch => {
    return {
        onSelectCategory(id) {
            dispatch(selectCategory(id));

            dispatch(NavigationActions.navigate({
                routeName: 'EditCategory'
            }));
        }
    };
};

export default connect(null, mapDispatchToProps);