import React from 'react'
import { connect } from 'react-redux';
import { IconButton } from 'src/components';
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
        <IconButton
            name={viewType === LIST? 'md-pie' : 'md-list'}
            size={26}
            color="gray"
            backgroundColor="transparent"
            onPress={switchViewType}
        />
    );
}

export default connect(mapStateToProps, { switchViewType })(SwitchViewTypeIcon);
