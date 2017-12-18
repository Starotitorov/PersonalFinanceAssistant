import { connect } from 'react-redux';
import { getTransactionsChartData } from 'src/selectors/transactions';
import TrendsHistogram from './TrendsHistogram'

const mapStateToProps = state => {
    return {
        ...getTransactionsChartData(state)
    }
};

export default connect(mapStateToProps)(TrendsHistogram);
