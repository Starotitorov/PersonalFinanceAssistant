import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import CategoryTabsScreen from './CategoryTabsScreen';
import CategoryTabsScreenView from './CategoryTabsScreenView';
import { addCategory } from './actions';
import { fetchCategoriesListData } from '../CategoriesList/actions';

const withCategories = lifecycle({
  componentDidMount() {
    this.props.fetchCategoriesListData();
  }
});

export default compose(
  connect(null, { addCategory, fetchCategoriesListData }),
  withCategories,
  CategoryTabsScreenView
)(CategoryTabsScreen);
