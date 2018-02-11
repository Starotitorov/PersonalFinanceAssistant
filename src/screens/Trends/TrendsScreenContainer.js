import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getTrendsData, isTrendsDataFetching } from './selectors';
import { withLoadingIndicator, withFetchScreenDataOnFocus } from 'src/components';
import { fetchTrendsData } from './actions'
import TrendsScreen from './TrendsScreen';

const mapStateToProps = state => {
    return {
        isLoading: isTrendsDataFetching(state),
        data: getTrendsData(state)
    };
};

export default compose(
    connect(mapStateToProps, { fetchScreenData: fetchTrendsData }),
    withFetchScreenDataOnFocus('Trends'),
    withLoadingIndicator
)(TrendsScreen);
