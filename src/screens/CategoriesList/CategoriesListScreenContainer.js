import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withLoadingIndicator } from 'src/components';
import { selectCategory } from './actions';
import { isCategoriesListDataFetching } from './selectors';

const mapStateToProps = state => ({
  isLoading: isCategoriesListDataFetching(state),
});

export default compose(
  connect(
    mapStateToProps,
    {
      selectCategory
    }
  ),
  withLoadingIndicator
);
