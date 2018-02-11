import { connect } from 'react-redux';
import {
    getTransactionsGroupedByCategories
} from '../../selectors';
import TransactionsList from './TransactionsList';

const mapStateToProps = state => {
    return {
        data: getTransactionsGroupedByCategories(state)
    }
};

export default connect(mapStateToProps)(TransactionsList)
