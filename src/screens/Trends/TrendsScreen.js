import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import TrendsHistogram from './components/TrendsHistogram';

export default class TransactionsScreen extends Component {
    renderViewInner() {
        const {viewType, onRefresh, fetching} = this.props;


        return (
            <TrendsHistogram fetching={fetching} onRefresh={onRefresh}/>
        );


    }

    render() {
        const {
            currentDate,
            onChangeCurrentDateForward,
            onChangeCurrentDateBack,
            onAddTransaction,
        } = this.props;

        return (
            <View style={styles.container}>

                { this.renderViewInner() }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
