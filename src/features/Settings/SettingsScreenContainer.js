import { connect } from 'react-redux';
import { resetData } from './actions';
import SettingsScreen from './SettingsScreen';

export default connect(null, { resetData })(SettingsScreen);
