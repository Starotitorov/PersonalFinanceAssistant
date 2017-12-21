import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { selectCategory } from 'src/actions/categories';
import { compose } from 'redux';
import { withLoadingIndicator } from 'src/components';
import { refreshCategories } from 'src/actions/categories';
import { isApplicationDataFetching } from 'src/selectors/application';
import { isCategoreisRefreshing, isCategoriesFetching } from 'src/selectors/categories';

const mapStateToProps = state => {
    return {
        isLoading: isApplicationDataFetching(state) || isCategoriesFetching(state),
        refreshing: isCategoreisRefreshing(state)
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
            dispatch(refreshCategories());
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoadingIndicator
);
