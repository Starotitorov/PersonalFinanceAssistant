import React from 'react';
import { List, ListItem } from 'react-native-elements';
import { StyleSheet, ScrollView } from 'react-native';
import { margins } from 'src/styles';

export default function AccountsList({ accounts, onSelectAccount }) {
    return (
        <ScrollView>
            <List containerStyle={styles.list}>
                {accounts.map(({ id, icon, balance, name}) => (
                    <ListItem
                        key={id}
                        title={name}
                        leftIcon={{ name: icon }}
                        rightTitle={String(balance)}
                        onPress={() => onSelectAccount(id)}
                    />
                ))}
            </List>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    list: {
        marginVertical: margins.MARGIN_L
    }
});
