import { withHandlers } from 'recompose';
import TrendsDateRangePicker from './TrendsDateRangePicker';

const withHandleSelectDate = withHandlers({
  setFromDate: ({ dateRange: { to }, setDateRange }) => from => setDateRange({ from, to }),
  setToDate: ({ dateRange: { from }, setDateRange }) => to => setDateRange({ from, to })
});

export default withHandleSelectDate(TrendsDateRangePicker);
