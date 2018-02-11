import React from 'react'
import { connect } from 'react-redux';
import { IconButton } from 'src/components/index';
import { switchViewType } from '../../actions';
import { LIST } from 'src/screens/Transactions/constants';
import { getViewType } from '../../selectors';

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
