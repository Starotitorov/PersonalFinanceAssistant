import { withProps, withHandlers, compose } from 'recompose';
import { createAddCategoryViewModel } from '../../components/CategoryForm/viewModel';
import AddCategoryScreen from './AddCategoryScreen';

const withViewModel = withProps(() => ({
  viewModel: createAddCategoryViewModel()
}));

const withHandleAddCategory = withHandlers({
  handleAddCategory: ({ addCategory }) => ({ name: nameValue, ...rest }) => {
    const name = nameValue.trim();

    return addCategory({ name, ...rest });
  }
});

export default compose(
  withViewModel,
  withHandleAddCategory
)(AddCategoryScreen);
