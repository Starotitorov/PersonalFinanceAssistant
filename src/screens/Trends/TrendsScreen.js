import React from 'react';
import {View, StyleSheet} from 'react-native';
import TrendsHistogram from './components/TrendsHistogram';

export default function TransactionsScreen({ data }) {
    return (
        <View style={styles.container}>
            <TrendsHistogram data={data} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
