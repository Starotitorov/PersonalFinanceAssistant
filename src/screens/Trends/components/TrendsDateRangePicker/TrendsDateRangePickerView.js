import { withHandlers, withState, compose } from 'recompose';
import moment from 'moment';
import TrendsDateRangePicker from './TrendsDateRangePicker';
import { getInitialValues } from './helpers';

const withDateRange = withState('dateRange', 'setDateRange', props => getInitialValues(props));

const withHandleSelectDate = withHandlers({
  setFromDate: ({ dateRange: { to }, setDateRange }) => from => setDateRange({ from: moment(from).startOf('day'), to }),
  setToDate: ({ dateRange: { from }, setDateRange }) => to => setDateRange({ from, to: moment(to).endOf('day') })
});

const withHandleGet = withHandlers({
  handleGet: ({ handleGetData, dateRange }) => () =>
    handleGetData(dateRange)
});

export default compose(
  withDateRange,
  withHandleSelectDate,
  withHandleGet
)(TrendsDateRangePicker);
