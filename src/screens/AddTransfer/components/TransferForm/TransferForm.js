import React from 'react';
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native';
import {
    TextInputField as TextInput,
    SelectInputField as SelectInput,
    DatePickerField,
    PrimaryButton,
    Field
} from 'src/components';
import styles from './TransferFormStyles';
import { normalizeDate, formatDate } from 'src/utils'

const TransferForm = ({
    isSameCurrency,
    handleSubmit,
    submitting,
    invalid,
    viewModel
}) =>
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.fields}>
            <Field
                {...viewModel.value}
                component={TextInput} />
            <Field
                {...viewModel.fromAccountId}
                component={SelectInput} />
            <Field
                {...viewModel.toAccountId}
                component={SelectInput} />
            {
                !isSameCurrency &&
                    <Field
                        {...viewModel.exchangeRate}
                        component={TextInput}/>
            }
            <Field
                {...viewModel.date}
                format={formatDate}
                normalize={normalizeDate}
                component={DatePickerField} />
            <Field
                {...viewModel.note}
                component={TextInput} />
        </View>
        <PrimaryButton
            disabled={invalid || submitting}
            onPress={handleSubmit}
            title="Transfer"
        />
    </ScrollView>;

TransferForm.propTypes = {
    isSameCurrency: PropTypes.bool,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    viewModel: PropTypes.shape({})
};

export default TransferForm;

