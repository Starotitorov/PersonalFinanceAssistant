import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';

const DropdownComponent = ({ options, value, onChange, ...rest }) =>
    <Dropdown
        {...rest}
        value={value}
        data={options}
        onChangeText={onChange} />

DropdownComponent.propTypes = {
    options: PropTypes.shape({}),
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default DropdownComponent;
