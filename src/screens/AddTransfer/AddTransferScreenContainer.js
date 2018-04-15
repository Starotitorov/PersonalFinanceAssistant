import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { addTransfer, setAccounts } from './actions';
import { getAddTransferFormOptions } from './selectors';
import AddTransferScreen from './AddTransferScreen';

const withSetAddTransferData = lifecycle({
  componentDidMount() {
    const { navigation: { state: { params: { accounts }}}, setAccounts } = this.props;

    setAccounts(accounts);
  }
});

const mapStateToProps = state => ({
  options: getAddTransferFormOptions(state)
});

export default compose(
  connect(mapStateToProps, { addTransfer, setAccounts }),
  withSetAddTransferData
)(AddTransferScreen);
