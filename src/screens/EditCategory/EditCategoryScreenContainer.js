import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
import { withLoadingIndicator } from 'src/components'
import { updateCategory, fetchCategory } from './actions';
import { getEditCategoryFormInitialValues, isCategoryFetching } from './selectors';
import EditCategoryScreen from './EditCategoryScreen';

const withSelectedCategory = lifecycle({
    componentDidMount() {
        const { id } = this.props.navigation.state.params;

        this.props.fetchCategory(id);
    }
});

const mapStateToProps = (state) => {
    return {
        isLoading: isCategoryFetching(state),
        initialValues: getEditCategoryFormInitialValues(state)
    };
};

export default compose(
    connect(mapStateToProps, { updateCategory, fetchCategory }),
    withSelectedCategory,
    withLoadingIndicator
)(EditCategoryScreen);
