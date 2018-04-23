import { withProps, withHandlers, compose } from 'recompose';
import { getItemData } from './helpers';
import CategoriesListItem from './CategoriesListItem';

const withItemData = withProps(({ category }) => ({
  item: getItemData(category)
}));

const withHandleSelectCategory = withHandlers({
  handleSelectCategory: ({ onSelectCategory, category: { id }}) => () => onSelectCategory(id)
});

export default compose(
  withItemData,
  withHandleSelectCategory
)(CategoriesListItem);
