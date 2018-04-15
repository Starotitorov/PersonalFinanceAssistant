import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withScreenFocus } from 'src/components';
import CategoryTabsScreen from './CategoryTabsScreen';
import CategoryTabsScreenView from './CategoryTabsScreenView';
import { addCategory } from './actions';
import { fetchCategoriesListData } from '../CategoriesList/actions';

export default compose(
  connect(null, { addCategory, onFocus: fetchCategoriesListData }),
  withScreenFocus('CategoryTabs'),
  CategoryTabsScreenView
)(CategoryTabsScreen);
