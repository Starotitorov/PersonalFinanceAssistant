import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';
import { removeAccount } from './actions';
import { RemoveHeaderIcon } from 'src/components';

const withHandleRemove = withHandlers({
  onPress: ({ navigation: { state: { params: { account: { id }}}}, removeAccount }) => () => {
    removeAccount(id);
  }
});

export default compose(
  connect(null, { removeAccount }),
  withHandleRemove
)(RemoveHeaderIcon);

