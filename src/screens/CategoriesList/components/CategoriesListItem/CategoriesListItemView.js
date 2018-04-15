import { withProps } from 'recompose';
import { getItemData } from './helpers';
import CategoriesListItem from './CategoriesListItem';

const withItemData = withProps(({ category }) => ({
  item: getItemData(category)
}));

export default withItemData(CategoriesListItem);
