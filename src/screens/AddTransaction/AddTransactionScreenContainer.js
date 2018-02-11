import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose'
import { addTransaction, setAddTransactionData } from './actions';
import { getAddTransactionFormOptions } from './selectors';
import AddTransactionScreen from './AddTransactionScreen';

const withAddTransactionData = lifecycle({
    componentDidMount() {
        const { navigation: { state: { params }}, setAddTransactionData } = this.props;

        setAddTransactionData(params)
    }
});

const mapStateToProps = state => {
    return {
        options: getAddTransactionFormOptions(state)
    };
};

export default compose(
    connect(mapStateToProps, { addTransaction, setAddTransactionData }),
    withAddTransactionData
)(AddTransactionScreen);
