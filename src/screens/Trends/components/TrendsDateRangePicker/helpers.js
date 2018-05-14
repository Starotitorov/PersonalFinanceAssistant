import moment from 'moment';

export const getInitialValues = ({ dateRange }) =>
  dateRange && dateRange.from && dateRange.to ?
    dateRange :
    {
      to: moment().endOf('day'),
      from: moment().subtract(2, 'month').startOf('day')
    };
