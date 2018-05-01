import { sum } from 'lodash';

export const getData = data => data.intervals.map((value, index) => ({
  label: value,
  income: data.income[index].toFixed(2),
  outcome: data.outcome[index].toFixed(2)
}));

export const getAverageData = data => ({
  averageIncome: data.intervals.length > 0 ? (sum(data.income) / data.intervals.length).toFixed(2) : '0.00',
  averageOutcome: data.intervals.length > 0 ? (sum(data.outcome) / data.intervals.length).toFixed(2) : '0.00'
});
