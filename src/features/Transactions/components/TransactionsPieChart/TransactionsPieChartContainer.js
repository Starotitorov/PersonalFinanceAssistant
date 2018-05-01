import { connect } from 'react-redux';
import { getTransactionsChartData } from '../../selectors';
import TransactionsPieChart from './TransactionsPieChart';
import { getPieChartConfig } from './helpers';

const mapStateToProps = state => {
  const dataObject = getTransactionsChartData(state);
  const { description, data, legend, styledCenterText } = getPieChartConfig(dataObject);

  return {
    description,
    data,
    legend,
    styledCenterText
  };
};

export default connect(mapStateToProps)(TransactionsPieChart);
