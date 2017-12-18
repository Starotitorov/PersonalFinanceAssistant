import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-elements';
import config from 'src/config';

export default function CurrencyScreen() {
    return (
        <View>
            <Card>
                <Text h4>
                    Exchange rates:
                </Text>
            </Card>
            <Card>
                <Text>
                    1 USD -> 2.05 BYN
                </Text>
            </Card>
            <Card>
                <Text>
                    1 EUR -> 2.3 BYN
                </Text>
            </Card>
            <Card>
                <Text>
                    1 EUR -> 1.9 USD
                </Text>
            </Card>


        </View>
    );
}
