import React from 'react'
import { connect } from 'react-redux';
import { IconButton } from 'src/components';
import { colors } from 'src/styles';
import { LIST } from '../../constants';
import { switchViewType } from '../../actions';
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
            color={colors.COLOR_WHITE}
            backgroundColor="transparent"
            onPress={switchViewType}
        />
    );
}

export default connect(mapStateToProps, { switchViewType })(SwitchViewTypeIcon);
