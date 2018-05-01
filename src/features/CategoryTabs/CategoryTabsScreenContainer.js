import { connect } from 'react-redux';
import { compose } from 'recompose';
import CategoryTabsScreen from './CategoryTabsScreen';
import CategoryTabsScreenView from './CategoryTabsScreenView';
import { addCategory } from '../CategoryTabs/actions';

export default compose(
  connect(null, { addCategory }),
  CategoryTabsScreenView
)(CategoryTabsScreen);
