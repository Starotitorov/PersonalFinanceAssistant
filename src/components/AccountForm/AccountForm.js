import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ACCOUNT_FORM } from 'src/constants/forms';
import moment from 'moment';
import { TextInputField, DatePickerField, SelectInputField } from 'src/components';
import { IconField } from 'src/components';
import supportedCurrency, * as currency from 'src/constants/currency';
import validate from './validate';
import { PrimaryButton } from 'src/components';
import { normalizeDate } from 'src/utils';
import { margins } from 'src/styles'

function AccountForm({ handleSubmit, submitting, invalid, createAccount }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fields}>
                <View style={styles.row}>
                    <Field
                        name="icon"
                        style={styles.icon}
                        component={IconField}
                    />
                    <View style={styles.flexGrow}>
                        <Field
                            name="name"
                            props={{
                                label: 'Account name',
                                placeholder: 'Enter account name...'
                            }}
                            component={TextInputField}
                        />
                    </View>
                </View>
                {createAccount &&
                    [
                        <Field
                            key="balance"
                            name="balance"
                            props={{
                                label: 'Initial balance',
                                placeholder: 'Enter initial balance...'
                            }}
                            component={TextInputField}
                        />,
                        <Field
                            key="currency"
                            name="currency"
                            props={{
                                label: 'Currency',
                                placeholder: 'Enter currency...',
                                options: supportedCurrency
                            }}
                            component={SelectInputField}
                        />
                    ]
                }
                <Field
                    name="initialDate"
                    props={{
                        label: 'Initial date',
                        placeholder: 'Enter initial date...'
                    }}
                    format={value => moment(value).format('MM/DD/YYYY')}
                    normalize={normalizeDate}
                    component={DatePickerField}
                />
            </View>
            <PrimaryButton
                title={createAccount ? 'Add account' : 'Save changes'}
                disabled={submitting || invalid}
                onPress={handleSubmit}
            />
        </ScrollView>
    );
}

export default reduxForm({
    form: ACCOUNT_FORM,
    initialValues: {
        icon: 'cash',
        initialDate: new Date().toUTCString(),
        currency: currency.BYN
    },
    validate
})(AccountForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        width: 300
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    fields: {
        marginBottom: 50
    },
    flexGrow: {
        flexGrow: 1
    },
    icon: {
        marginRight: margins.MARGIN_M
    }
});
