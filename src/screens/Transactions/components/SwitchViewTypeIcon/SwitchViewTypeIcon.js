import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from 'src/components';
import { colors } from 'src/styles';
import { LIST } from '../../constants';

const SwitchViewTypeIcon = ({ viewType, switchViewType }) =>
    <IconButton
        name={viewType === LIST? 'md-pie' : 'md-list'}
        size={26}
        color={colors.COLOR_WHITE}
        backgroundColor="transparent"
        onPress={switchViewType} />;

SwitchViewTypeIcon.propTypes = {
    viewType: PropTypes.string,
    switchViewType: PropTypes.func
};

export default SwitchViewTypeIcon;
