import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { margins, fontSizes } from 'src/styles'
import { handleAddTransfer } from './actions';
import { colors } from 'src/styles';

function AccountsListHeaderRight({ handleAddTransfer }) {
    return (
        <TouchableOpacity onPress={handleAddTransfer}>
            <Icon
                style={styles.icon}
                color={colors.COLOR_WHITE}
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

export default connect(null, { handleAddTransfer })(AccountsListHeaderRight);
