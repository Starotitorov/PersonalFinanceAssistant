import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withScreenFocus, withLoadingIndicator } from 'src/components';
import CategoryTabsScreen from './CategoryTabsScreen';
import CategoryTabsScreenView from './CategoryTabsScreenView';
import { addCategory, fetchCategoriesListData } from './actions';
import { isCategoriesListDataFetching } from './selectors';

export default compose(
  connect(
    state => ({ isLoading: isCategoriesListDataFetching(state) }),
    { addCategory, onFocus: fetchCategoriesListData }
  ),
  withScreenFocus('Categories'),
  withLoadingIndicator,
  CategoryTabsScreenView
)(CategoryTabsScreen);
