import { processColor } from 'react-native';

export const getHistogramConfig = (
    {
        data: {
            income,
            outcome
        } = {}
    }
) => {
    return {
        legend: {
            enabled: true,
            textSize: 14,
            form: "SQUARE",
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
                    colors: [processColor('red')],
                }
            }, {
                values: outcome,
                label: 'Outcome',
                config: {
                    drawValues: false,
                    colors: [processColor('blue')],
                }
            }],
            config: {
                barWidth: 0.2,
                group: {
                    fromX: 0,
                    groupSpace: 0.1,
                    barSpace: 0.1,
                },
            }
        },
        xAxis: {
            valueFormatter: ['', '', '', '', ''],
            granularityEnabled: true,
            granularity: 1,
            axisMaximum: 5,
            axisMinimum: 0,
            centerAxisLabels: true
        }
    }
};
