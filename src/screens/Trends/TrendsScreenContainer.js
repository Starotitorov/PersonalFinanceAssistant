import { connect } from 'react-redux';
import { getTrendsData } from 'src/selectors/transactions';
import TrendsScreen from './TrendsScreen';

const mapStateToProps = state => {
    return {
        data: getTrendsData(state)
    };
};

export default connect(mapStateToProps)(TrendsScreen);
