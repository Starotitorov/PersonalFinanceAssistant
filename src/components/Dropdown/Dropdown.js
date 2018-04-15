import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';
import { colors } from 'src/styles';

const DropdownComponent = ({ options, value, onChange, ...rest }) =>
  <Dropdown
    { ...rest }
    value={ value }
    data={ options }
    tintColor={ colors.COLOR_SECONDARY }
    onChangeText={ onChange } />;

DropdownComponent.propTypes = {
  options: PropTypes.shape({}),
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default DropdownComponent;
