import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { switchViewType } from 'src/actions/transactions';
import { LIST } from 'src/constants/transactionsViewTypes';
import { getViewType } from 'src/selectors/transactions';

const mapStateToProps = state => {
    return {
        viewType: getViewType(state)
    }
};

function SwitchViewTypeIcon({ viewType, switchViewType }) {
    return (
        <Icon.Button
            name={viewType === LIST? 'md-pie' : 'md-list'}
            color="gray"
            backgroundColor="transparent"
            onPress={switchViewType}
        />
    );
}

export default connect(mapStateToProps, { switchViewType })(SwitchViewTypeIcon);
