import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NetInfo } from 'react-native';
import { setConnectionInfo } from 'src/components/HOC/withNetwork/actions';
import { networkService } from 'src/services';

export default function withNetwork(WrappedComponent) {
    class Wrapper extends Component {
        handleConnectionChange = (connectionInfo) => {
            const { setConnectionInfo } = this.props;

            setConnectionInfo(connectionInfo);

            networkService.setConnectionInfo(connectionInfo);
        };

        componentDidMount() {
            NetInfo.getConnectionInfo()
                .then(this.handleConnectionChange);

            NetInfo.addEventListener(
                'connectionChange',
                this.handleConnectionChange
            );
        }

        componentWillUnmount() {
            NetInfo.removeEventListener(
                'connectionChange',
                this.handleConnectionChange
            );
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return connect(null, { setConnectionInfo })(Wrapper);
}
