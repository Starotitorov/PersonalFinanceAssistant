import React, { Component } from 'react';
import { entries } from 'lodash';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { BASE_CURRENCY } from 'src/constants/currency';

export default class CurrencyScreen extends Component {
    componentDidMount() {
        this.props.fetchExchangeRates();
    }

    render() {
        const { exchangeRates } = this.props;
        const pairs = entries(exchangeRates);

        return (
            <ScrollView>
                <Card>
                    {
                        pairs.map((entry, index) => {
                            return (
                                <View key={entry[0]} style={index !== pairs.length - 1 && styles.item}>
                                    <Text>
                                        1 {BASE_CURRENCY} -> {entry[1]} {entry[0]}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 8
    }
});
