import { processColor } from 'react-native';
import { fontSizes } from 'src/styles';
import { DEFAULT_BASE_CURRENCY } from 'src/constants/currency';

export const getHistogramConfig = ({
  data: {
    income,
    outcome,
    intervals
  } = {}
}) => ({
  legend: {
    enabled: true,
    textSize: 14,
    form: 'SQUARE',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    wordWrapEnabled: true
  },
  data: {
    dataSets: [{
      values: income,
      label: 'Income',
      config: {
        drawValues: false,
        colors: [processColor('red')]
      }
    }, {
      values: outcome,
      label: 'Outcome',
      config: {
        drawValues: false,
        colors: [processColor('blue')]
      }
    }],
    config: {
      barWidth: 0.2,
      group: {
        fromX: 0,
        groupSpace: 0.2,
        barSpace: 0.2
      }
    }
  },
  description: {
    text: `Statistics for the period in ${DEFAULT_BASE_CURRENCY}`,
    textSize: fontSizes.FONT_SIZE_S
  },
  xAxis: {
    valueFormatter: intervals,
    granularityEnabled: true,
    granularity: 1,
    axisMaximum: intervals.length,
    axisMinimum: 0,
    centerAxisLabels: true
  },
  yAxis: {
    axisMinimum: 0
  }
});
