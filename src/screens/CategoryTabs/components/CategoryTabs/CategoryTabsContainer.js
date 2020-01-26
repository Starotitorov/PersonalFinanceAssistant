import { connect } from 'react-redux';
import CategoryTabsView from './CategoryTabsView';
import { fetchCategoriesListData, resetCategoriesListData } from '../../../CategoriesList/actions';

export default connect(
  null, { fetchCategoriesListData, resetCategoriesListData }
)(CategoryTabsView);
