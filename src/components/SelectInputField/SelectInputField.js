import React from 'react';
import SelectInput from '../SelectInput';

export default function SelectInputField({ input, label, options }) {
    return (
        <SelectInput {...input} label={label} options={options} />
    );
}
