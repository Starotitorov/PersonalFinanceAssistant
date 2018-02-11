import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose'
import { removeCategory } from './actions';
import { RemoveHeaderIcon } from 'src/components';

const withHandleRemove = withHandlers({
    onPress: ({ navigation: { state: { params: { id }}}, removeCategory }) => () => {
        removeCategory(id);
    }
});

export default compose(
    connect(null, { removeCategory }),
    withHandleRemove
)(RemoveHeaderIcon);
