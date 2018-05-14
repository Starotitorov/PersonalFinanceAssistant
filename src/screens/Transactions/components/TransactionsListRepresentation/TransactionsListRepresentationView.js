import { branch, renderComponent, renderNothing, compose } from 'recompose';
import { withLoadingIndicator } from 'src/components';
import TransactionsList from '../TransactionsList';
import TransactionsPieChart from '../TransactionsPieChart';
import { LIST, CHART } from '../../constants';

const withListViewType = branch(
  ({ viewType }) => viewType === LIST,
  renderComponent(TransactionsList)
);

const withPieChartViewType = branch(
  ({ viewType }) => viewType === CHART,
  renderComponent(TransactionsPieChart)
);

export default compose(
  withLoadingIndicator,
  withListViewType,
  withPieChartViewType
)(renderNothing());
