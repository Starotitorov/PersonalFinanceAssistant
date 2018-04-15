import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withLoadingIndicator } from 'src/components';
import {
  refreshCategoriesListData,
  selectCategory
} from './actions';
import { isCategoriesListDataFetching, isCategoriesListDataRefreshing } from './selectors';

const mapStateToProps = state => ({
  isLoading: isCategoriesListDataFetching(state),
  refreshing: isCategoriesListDataRefreshing(state)
});

export default compose(
  connect(
    mapStateToProps,
    {
      refreshCategoriesListData,
      selectCategory
    }
  ),
  withLoadingIndicator
);
