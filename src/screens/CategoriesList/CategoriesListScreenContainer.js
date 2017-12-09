import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { selectCategory } from 'src/actions/categories';
import { compose } from 'redux';
import { withLoadingIndicator } from 'src/components';
import { fetchCategories } from 'src/actions/categories';
import { isApplicationDataFetching } from 'src/selectors/application';
import { isCategoriesFetching } from 'src/selectors/categories';

const mapStateToProps = state => {
    return {
        isLoading: isApplicationDataFetching(state),
        fetching: isCategoriesFetching(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectCategory(id) {
            dispatch(selectCategory(id));

            dispatch(NavigationActions.navigate({
                routeName: 'EditCategory'
            }));
        },

        onRefresh() {
            dispatch(fetchCategories());
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoadingIndicator
);
