import { connect } from 'react-redux';
import { addAccount } from './actions';
import AddAccountScreen from './AddAccountScreen';

export default connect(null, { addAccount })(AddAccountScreen);
