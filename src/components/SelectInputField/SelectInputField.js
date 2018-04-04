import React from 'react';
import SelectInput from '../SelectInput';

export default function SelectInputField({ input, label, options, ...props }) {
    return (
        <SelectInput {...input} {...props} label={label} options={options} />
    );
}
