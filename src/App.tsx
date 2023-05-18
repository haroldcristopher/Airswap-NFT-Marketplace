import React from 'react';

import { Web3ReactProvider } from '@web3-react/core';

import Routes from './compositions/Routes/Routes';
import { setLibrary } from './helpers/ethers';
import useMapWeb3ReactToStore from './hooks/useMapWeb3ReactToStore';
import useSwitchChain from './hooks/useSwitchChain';
import { useMetadata } from './redux/stores/metadata/metadataHooks';
import { useTransactions } from './redux/stores/transactions/transactionsHooks';
import ToastsWidget from './widgets/ToastsWidget/ToastsWidget';

const ConnectedApp = () => {
  useMapWeb3ReactToStore();
  useTransactions();
  useMetadata();
  useSwitchChain();

  return (
    <Routes />
  );
};

const App = () => (
  <Web3ReactProvider getLibrary={setLibrary}>
    <ConnectedApp />
    <ToastsWidget />
  </Web3ReactProvider>
);

export default App;
