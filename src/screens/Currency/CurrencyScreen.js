import React, { Component } from 'react';
import { entries } from 'lodash';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';

const BASE_CURRENCY = 'USD';

export default class CurrencyScreen extends Component {
    componentDidMount() {
        this.props.fetchExchangeRates();
    }

    render() {
        const { exchangeRates } = this.props;

        return (
            <ScrollView>
                <Card>
                    <Text h4>
                        Exchange rates:
                    </Text>
                </Card>
                {
                    entries(exchangeRates).map(entry => {
                        return (
                            <Card key={entry[0]}>
                                <Text>
                                    1 {BASE_CURRENCY} -> {entry[1]} {entry[0]}
                                </Text>
                            </Card>
                        )
                    })
                }
            </ScrollView>
        );
    }
}
