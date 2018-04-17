import { processColor } from 'react-native';
import { fontSizes } from 'src/styles';

const COLORS = [
  processColor('#C0FF8C'),
  processColor('#FFF78C'),
  processColor('#FFD08C'),
  processColor('#8CEAFF'),
  processColor('#FF8C9D')
];

export const getPieChartConfig = ({
  values,
  totalIncomeSum,
  totalOutcomeSum,
  totalBalance,
  currency
}) => {
  const currencyText = currency ? `, ${currency}` : '';

  return {
    legend: {
      enabled: true,
      textSize: fontSizes.FONT_SIZE_M,
      form: 'CIRCLE',
      position: 'RIGHT_OF_CHART',
      wordWrapEnabled: true
    },
    data: {
      dataSets: [{
        values,
        label: 'Categories',
        config: {
          colors: COLORS,
          valueTextSize: fontSizes.FONT_SIZE_M,
          valueTextColor: processColor('green'),
          sliceSpace: 4,
          selectionShift: 12
        }
      }]
    },
    description: {
      text: `Total balance for the period: ${totalBalance}${currencyText}`,
      textSize: fontSizes.FONT_SIZE_L,
      textColor: processColor('black')
    },
    styledCenterText: {
      text: `+ ${totalIncomeSum}${currencyText}\n - ${Math.abs(totalOutcomeSum)}${currencyText}`,
      color: processColor('darkgray'),
      size: fontSizes.FONT_SIZE_L
    }
  };
};
