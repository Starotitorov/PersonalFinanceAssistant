import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'react-native-select-input-ios';

const SelectInputComponent = ({ options, ...rest }) =>
    <SelectInput
        {...rest}
        value={rest.value}
        options={options}
        onSubmitEditing={rest.onChange} />

SelectInputComponent.propTypes = {
    options: PropTypes.shape({})
};

export default SelectInputComponent;
