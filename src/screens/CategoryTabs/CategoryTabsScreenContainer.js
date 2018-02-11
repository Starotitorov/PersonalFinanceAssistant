import { connect } from 'react-redux';
import { compose } from 'recompose'
import { withFetchScreenDataOnFocus } from 'src/components'
import CategoryTabsScreen from './CategoryTabsScreen';
import CategoryTabsScreenView from './CategoryTabsScreenView';
import { addCategory } from './actions';
import { fetchCategoriesListData } from '../CategoriesList/actions'

export default compose(
    connect(null, { addCategory, fetchScreenData: fetchCategoriesListData }),
    withFetchScreenDataOnFocus('CategoryTabs'),
    CategoryTabsScreenView
)(CategoryTabsScreen)
