import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { margins, fontSizes } from 'src/styles'

const mapDispatchToProps = dispatch => {
    return {
        onPress() {
            dispatch(NavigationActions.navigate({ routeName: 'AddTransfer' }));
        }
    }
};

function AccountsListHeaderRight({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon
                style={styles.icon}
                name="compare-arrows"
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: margins.MARGIN_M,
        fontSize: fontSizes.FONT_SIZE_XL
    }
});

export default connect(null, mapDispatchToProps)(AccountsListHeaderRight);
