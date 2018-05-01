import React from 'react';
import Loading from '../../Loading';

export default function withLoadingIndicator(WrappedComponent, size = 40) {
  return function Wrapper({ isLoading, ...rest }) {
    if (isLoading) {
      return (
        <Loading size={ size } />
      );
    }

    return (
      <WrappedComponent { ...rest } />
    );
  };
}
