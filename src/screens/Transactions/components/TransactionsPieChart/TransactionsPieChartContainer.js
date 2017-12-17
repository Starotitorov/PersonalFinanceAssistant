import { connect } from 'react-redux';
import { getTransactionsChartData } from 'src/selectors/transactions';
import TransactionsPieChart from './TransactionsPieChart'

const mapStateToProps = state => {
    return {
        ...getTransactionsChartData(state)
    }
};

export default connect(mapStateToProps)(TransactionsPieChart);
