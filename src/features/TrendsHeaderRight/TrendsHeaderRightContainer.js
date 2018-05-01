import { connect } from 'react-redux';
import TrendsHeaderRight from './TrendsHeaderRight';
import { showTrendsInformationModal } from '../Trends/components/InformationModal/actions';


export default connect(null, { onPress: showTrendsInformationModal })(TrendsHeaderRight);
