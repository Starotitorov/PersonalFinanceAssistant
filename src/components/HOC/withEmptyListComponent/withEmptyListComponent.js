import React from 'react';
import EmptyList from '../../EmptyList';

export default function withEmptyListComponent(WrappedComponent, message) {
  return props => (
    <WrappedComponent
      { ...props }
      EmptyListComponent={ <EmptyList text={ message } /> } />
  );
}
