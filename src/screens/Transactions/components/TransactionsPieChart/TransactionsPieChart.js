import React, { Component } from 'react';
import { View, processColor, ScrollView, RefreshControl } from 'react-native';
import { PieChart } from 'react-native-charts-wrapper';
import styles from './TransactionsPieChartStyles';
import { colors } from 'src/styles';
import { getPieChartConfig } from './helpers'

class TransactionsPieChart extends Component {
    constructor(props) {
        super(props);

        this.state = getPieChartConfig(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...getPieChartConfig(nextProps) });
    }

    render() {
        const { fetching, onRefresh } = this.props;
        const { description, data, legend, styledCenterText } = this.state;

        return (
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={fetching}
                        colors={[colors.COLOR_PRIMARY]}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View
                    style={styles.view}
                >
                    <PieChart
                        style={styles.chart}
                        logEnabled
                        chartBackgroundColor={processColor('#fff')}
                        chartDescription={description}
                        data={data}
                        legend={legend}

                        entryLabelColor={processColor('black')}
                        entryLabelTextSize={20}

                        rotationEnabled
                        rotationAngle={45}
                        drawSliceText
                        usePercentValues
                        styledCenterText={styledCenterText}
                        centerTextRadiusPercent={100}
                        holeRadius={40}
                        holeColor={processColor('#f0f0f0')}
                        transparentCircleRadius={45}
                        transparentCircleColor={processColor('#f0f0f088')}
                        maxAngle={360}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default TransactionsPieChart;
