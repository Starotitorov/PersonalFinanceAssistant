import moment from 'moment';
import { DEFAULT_BASE_CURRENCY, OTHER_CURRENCIES } from 'src/constants/currency';

export const startOfMonth = (d = new Date()) => moment(d).startOf('month').toDate();

export const startOfNextMonth = (d = new Date()) =>
  startOfMonth(moment(d).add(1, 'months').toDate());

export const getTimeIntervals = (from, to, months = []) => {
  if (moment(from) <= moment(to)) {
    const startOfNext = startOfNextMonth(from);
    return getTimeIntervals(startOfNext, to, [...months, [from, startOfNext]]);
  }

  return months;
};

export const getRequestQueryParameter = () => OTHER_CURRENCIES.map(c => `${c}_${DEFAULT_BASE_CURRENCY}`).join(',');
