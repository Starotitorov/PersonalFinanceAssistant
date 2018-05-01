import { connect } from 'react-redux';
import { getHistogramConfig } from './helpers';
import TrendsHistogram from './TrendsHistogram';

const mapStateToProps = (state, ownProps) => {
  const { legend, data, xAxis, description } = getHistogramConfig(ownProps);

  return {
    legend,
    data,
    xAxis,
    description
  };
};

export default connect(mapStateToProps)(TrendsHistogram);
