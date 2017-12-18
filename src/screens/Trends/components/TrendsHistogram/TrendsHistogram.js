import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';

export default function TrendsHistogram({ legend, data, xAxis }) {
    return (
        <View style={styles.container}>
            <BarChart
                style={styles.chart}
                xAxis={xAxis}
                data={data}
                legend={legend}
                drawValueAboveBar={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    chart: {
        flex: 1
    }
});
