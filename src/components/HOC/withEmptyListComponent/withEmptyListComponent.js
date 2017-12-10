import React, { Component } from 'react';
import EmptyList from '../../EmptyList';

export default function withEmptyListComponent(WrappedComponent, message) {
    return (props) => {
        return (
            <WrappedComponent
                {...props}
                EmptyListComponent={<EmptyList text={message} />}
            />
        )
    }
}