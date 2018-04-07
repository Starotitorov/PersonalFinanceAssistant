import { withProps, withHandlers, compose, lifecycle } from 'recompose';
import { withLoadingIndicator } from 'src/components'
import { createEditCategoryViewModel } from '../../components/CategoryForm/viewModel';
import EditCategoryScreen from './EditCategoryScreen';

const withViewModel = withProps(() => ({
    viewModel: createEditCategoryViewModel()
}));

const withHandleUpdateCategory = withHandlers({
    handleUpdateCategory: ({ updateCategory }) => ({ name: nameValue, ...rest }) => {
        const name = nameValue.trim();

        return updateCategory({ name, ...rest });
    }
});

const withSelectedCategory = lifecycle({
    componentDidMount() {
        const { id } = this.props.navigation.state.params;

        this.props.fetchCategory(id);
    }
});

export default compose(
    withSelectedCategory,
    withLoadingIndicator,
    withViewModel,
    withHandleUpdateCategory
)(EditCategoryScreen)
