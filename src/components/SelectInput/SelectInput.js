import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'react-native-select-input-ios';
import { colors } from 'src/styles';

const SelectInputComponent = ({ options, ...rest }) =>
    <SelectInput
        {...rest}
        sstyle={{color: colors.COLOR_WHITE}}
        labelStyle={{ color: colors.COLOR_WHITE}}
        value={rest.value}
        options={options}
        onSubmitEditing={rest.onChange} />

SelectInputComponent.propTypes = {
    options: PropTypes.shape({})
};

export default SelectInputComponent;
