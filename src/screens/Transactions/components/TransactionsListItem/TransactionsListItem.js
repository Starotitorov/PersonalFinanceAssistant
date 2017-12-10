import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { momentFormat } from 'src/utils';
import styles from './TransactionsListItemStyles';

const formatDate = momentFormat.formatTransactionDate;

export default class TransactionsListItem extends Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    renderSubItems(data) {
        return data.map(({ date, value, id }) => (
            <View key={ id } style={styles.subItemContainer}>
                <View style={styles.subItemDateContainer}>
                    <Text>{ formatDate(date) }</Text>
                </View>
                <Text>{ value }</Text>
            </View>
        ));
    }

    render() {
        const { isOpen } = this.state;
        const { transactions, category } = this.props.data;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.mainContainer} onPress={this.toggleOpen}>
                    <View style={styles.groupContainer}>
                        <Icon
                            style={styles.arrow}
                            name={isOpen ? 'ios-arrow-up' : 'ios-arrow-down'}
                        />
                        <View style={styles.textContainer}>
                            <Text>{ category.name }</Text>
                        </View>
                        <Badge value={transactions.length} />
                        <Text style={styles.transactionsSum}>{ category.sum }</Text>
                    </View>
                </TouchableOpacity>
                { isOpen && this.renderSubItems(transactions)}
            </View>
        );
    }
}
