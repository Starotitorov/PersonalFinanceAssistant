import moment from 'moment';

export const getInitialValues = ({ dateRange }) =>
  dateRange && dateRange.from && dateRange.to ?
    dateRange :
    {
      to: moment().endOf('day'),
      from: moment().subtract(3, 'month').startOf('day')
    };
