import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '../../components/Loading';

const PersistGateComponent = ({ persistor, children }) =>
  <PersistGate loading={ <Loading size={ 40} /> } persistor={ persistor }>
    { children }
  </PersistGate>;

export default PersistGateComponent;
