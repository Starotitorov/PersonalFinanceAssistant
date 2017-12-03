import React, { Component } from 'react';
import { TouchableOpacity, PickerIOS } from 'react-native';
import _ from 'lodash';
import TextInput from '../TextInput';
import styles from './SelectInputFieldStyles';

export default class SelectInput extends Component {
    constructor(props) {
        super(props);

        const { input: { value }, options } = this.props;
        const { label } = _.find(options, { value });
        
        this.state = {
            isVisible: false,
            selectedLabel: label
        };
    }

    componentWillReceiveProps({ input: { value }, options }) {
        const { label } = _.find(options, { value });

        this.setState({ selectedLabel: label });
    }


    showPicker = () => {
        const { onFocus } = this.props.input;

        onFocus();

        this.setState({ isVisible: true });
    };

    hidePicker = () => {
        const { onBlur } = this.props.input;

        onBlur();

        this.setState({ isVisible: false });
    };

    handlePicked = (value) => {
        const { onChange } = this.props.input;

        onChange(value);

        this.hidePicker();
    };

    render() {
        const { isVisible } = this.state;
        const { input, options, meta } = this.props;

        return (
            <TouchableOpacity onPress={this.showPicker}>
                <TextInput
                    editable={false}
                    label="Duration (hours)"
                    input={{ value: this.state.selectedLabel }}
                    meta={meta}
                />
                <PickerIOS
                    {...input}
                    style={[styles.picker, isVisible && styles.visible]}
                    onValueChange={this.handlePicked}
                    selectedValue={input.value}
                >
                    {options.map(option => (
                        <PickerIOS.Item key={option.value} label={option.label} value={option.value} />
                    ))}
                </PickerIOS>
            </TouchableOpacity>
        );
    }
}
