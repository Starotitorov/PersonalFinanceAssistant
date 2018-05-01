import { connect } from 'react-redux';
import SwitchViewTypeIcon from './SwitchViewTypeIcon';
import { switchViewType } from '../../actions';
import { getViewType } from '../../selectors';

const mapStateToProps = state => ({
  viewType: getViewType(state)
});

export default connect(mapStateToProps, { switchViewType })(SwitchViewTypeIcon);
