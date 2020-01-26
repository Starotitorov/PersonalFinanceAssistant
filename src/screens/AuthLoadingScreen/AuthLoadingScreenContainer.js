import { connect } from 'react-redux';
import { getCurrentUser } from '../LogIn/actions';
import AuthLoadingScreenView from './AuthLoadingScreenView';

export default connect(
  null, { getCurrentUser }
)(AuthLoadingScreenView);
