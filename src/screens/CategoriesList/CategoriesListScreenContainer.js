import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withLoadingIndicator } from 'src/components';
import { selectCategory, refreshCategoriesListData } from './actions';
import { isCategoriesListDataFetching, isCategoriesListDataRefreshing  } from './selectors';

const mapStateToProps = state => ({
  isLoading: isCategoriesListDataFetching(state),
  refreshing: isCategoriesListDataRefreshing(state)
});

export default compose(
  connect(
    mapStateToProps,
    {
      selectCategory,
      refreshCategoriesListData
    }
  ),
  withLoadingIndicator
);
