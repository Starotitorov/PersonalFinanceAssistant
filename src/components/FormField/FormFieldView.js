import React from 'react';
import { branch, renderNothing } from 'recompose'
import { Field } from 'redux-form'

const hideIfNoName = check => branch(check, renderNothing);

const FormField = hideIfNoName(({ name }) => !name)(Field);

export default FormField;
