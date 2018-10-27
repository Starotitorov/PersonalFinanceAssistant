/*
 * DatePickerField.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import TextInputField from '../TextInputField';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DatePickerInput extends Component {
    state = {
      visible: false
    };

    showPicker = () => {
      const { input: { onFocus = () => {} }} = this.props;

      onFocus();

      this.setState({
        visible: true
      });
    };

    hidePicker = () => {
      const { onBlur = () => {} } = this.props.input;

      onBlur();

      this.setState({ visible: false });
    };

    handlePicked = (date) => {
      const { onChange } = this.props.input;

      const value = moment(date).utc().valueOf();

      onChange(value);

      this.hidePicker();
    };

    render() {
      const { visible } = this.state;
      const { label, placeholder, style } = this.props;

      return (
        <TouchableOpacity style={ style } onPress={ this.showPicker }>
          <DateTimePicker
            isVisible={ visible }
            mode="date"
            onConfirm={ this.handlePicked }
            onCancel={ this.hidePicker } />
          <TextInputField
            { ...this.props }
            props={{
              label,
              placeholder
            }}
            editable={ false } />
        </TouchableOpacity>
      );
    }
}
