import React, { Component } from 'react';

export default function AccountsListScreenView(WrappedComponent) {
    return class extends Component {
        componentDidMount() {
            const { onFetch } = this.props;

            onFetch();
        }

        handleRefresh = () => {
            const { onFetch } = this.props;

            onFetch();
        };

        render() {
            return (
                <WrappedComponent {...this.props} onRefresh={this.handleRefresh} />
            );
        }
    }
}
