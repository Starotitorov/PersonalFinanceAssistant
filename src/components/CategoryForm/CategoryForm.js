import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { CATEGORY_FORM } from 'src/constants/forms';
import IconInput from '../CategoryIconField';
import SelectInput from '../SelectInputField';
import TextInput from '../TextInputField';
import options from './CategoryFormOptions';
import validate from './validate';

function CategoryForm({ handleSubmit, submitting, invalid }) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Field
                    name="icon"
                    component={IconInput}
                />
                <View style={styles.flexGrow}>
                    <Field
                        name="name"
                        props={{
                            label: 'Category name',
                            placeholder: 'Enter category name...'
                        }}
                        component={TextInput}
                    />
                </View>
            </View>
            <Field
                name="categoryType"
                component={SelectInput}
                options={options.categoryType}
            />
            <Button
                disabled={invalid || submitting}
                onPress={handleSubmit}
                title="Create category"
            />
        </View>
    );
}

export default reduxForm({
    form: CATEGORY_FORM,
    validate
})(CategoryForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        minWidth: 300
    },
    row :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexGrow: {
        flexGrow: 1
    }
});
