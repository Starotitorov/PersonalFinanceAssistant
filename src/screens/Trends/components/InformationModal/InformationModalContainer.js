import { connectModal } from 'redux-modal';
import { TRENDS_INFORMATION_MODAL } from './constants';
import InformationModal from './InformationModal';

export default connectModal({ name: TRENDS_INFORMATION_MODAL })(InformationModal);
