import { connect } from 'react-redux';
import { getTrendsData } from 'src/selectors/transactions';
import { isApplicationDataFetching } from 'src/selectors/application';
import { withLoadingIndicator } from 'src/components';
import TrendsScreen from './TrendsScreen';

const mapStateToProps = state => {
    return {
        isLoading: isApplicationDataFetching(state),
        data: getTrendsData(state)
    };
};

export default connect(mapStateToProps)(withLoadingIndicator(TrendsScreen));
