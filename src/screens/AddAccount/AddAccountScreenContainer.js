import { connect } from 'react-redux';
import { addAccount } from './actions';
import AddAccountScreenView from './AddAccountScreenView';

export default connect(null, { addAccount })(AddAccountScreenView);
