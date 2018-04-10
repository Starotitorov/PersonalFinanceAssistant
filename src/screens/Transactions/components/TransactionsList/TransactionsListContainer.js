import { connect } from 'react-redux';
import {
    getTransactionsGroupedByCategories
} from '../../selectors';
import TransactionsListView from './TransactionsListView';

const mapStateToProps = state => ({
    data: getTransactionsGroupedByCategories(state)
});

export default connect(mapStateToProps)(TransactionsListView);
