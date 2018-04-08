import React from 'react';
import Dropdown from '../Dropdown'

const SelectInputField = ({ input, label, options, ...props }) =>
    <Dropdown {...input} {...props} label={label} options={options} />

export default SelectInputField;
