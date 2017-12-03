import React from 'react';
import { View, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { CATEGORY_FORM } from 'src/constants/forms';
import IconInput from '../CategoryIconField';
import SelectInput from '../SelectInputField';
import TextInput from '../TextInputField';
import options from './CategoryFormOptions';

function CategoryForm({ handleSubmit, submitting, invalid }) {
    return (
        <View>
            <Field
                name="name"
                component={TextInput}
            />
            <Field
                name="icon"
                component={IconInput}
            />
            <Field
                name="categoryType"
                component={SelectInput}
                options={options.categoryType}
            />
            <Button
                disabled={invalid || submitting}
                onPress={handleSubmit}
                title="Submit"
            />
        </View>
    );
}

export default reduxForm({
    form: CATEGORY_FORM
})(CategoryForm);