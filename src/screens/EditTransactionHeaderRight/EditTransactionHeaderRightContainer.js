import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { RemoveHeaderIcon } from 'src/components';
import { removeTransaction } from './actions';

const withHandleRemove = withHandlers({
  onPress: ({ navigation: { state: { params: { id }}}, removeTransaction }) => () => {
    removeTransaction(id);
  }
});

export default compose(
  connect(null, { removeTransaction }),
  withHandleRemove
)(RemoveHeaderIcon);

