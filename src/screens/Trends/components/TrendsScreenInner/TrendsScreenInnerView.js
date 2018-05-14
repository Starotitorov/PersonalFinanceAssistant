import { compose, branch, renderNothing } from 'recompose';
import { withLoadingIndicator } from 'src/components';
import TrendsScreenInner from './TrendsScreenInner';

const withEmptyState = branch(
  ({ data }) => !data,
  renderNothing
);

export default compose(
  withLoadingIndicator,
  withEmptyState
)(TrendsScreenInner);
