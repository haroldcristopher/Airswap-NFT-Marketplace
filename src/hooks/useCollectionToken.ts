import { useEffect, useState } from 'react';

import { CollectionTokenInfo } from '@airswap/types';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { getCollectionToken } from '../entities/CollectionToken/CollectionTokenHelpers';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addCollectionTokenInfo } from '../redux/stores/metadata/metadataActions';

const useCollectionToken = (address: string, tokenId: string): [CollectionTokenInfo | undefined, boolean] => {
  const dispatch = useAppDispatch();
  const { provider } = useWeb3React<Web3Provider>();
  const { collectionTokens } = useAppSelector(state => state.metadata);

  const [isContractCalled, setIsContractCalled] = useState(false);
  const [isContractLoading, setIsContractLoading] = useState(true);
  const [collectionToken, setCollectionToken] = useState<CollectionTokenInfo>();
  const collectionTokenFromStore = collectionTokens[tokenId];

  useEffect((): void => {
    setIsContractCalled(false);
    setCollectionToken(undefined);
  }, [tokenId]);

  useEffect((): void => {
    if (!provider || isContractCalled || collectionTokenFromStore) {
      return;
    }

    const callGetCollectionToken = async () => {
      const result = await getCollectionToken(provider, address, tokenId);

      if (result) {
        dispatch(addCollectionTokenInfo(result));
      }

      setCollectionToken(result);
      setIsContractLoading(false);
    };

    setIsContractCalled(true);
    setIsContractLoading(true);
    callGetCollectionToken();
  }, [
    provider,
    address,
    tokenId,
    isContractCalled,
  ]);

  if (collectionTokenFromStore) {
    return [collectionTokenFromStore, false];
  }

  return [collectionToken, isContractLoading];
};

export default useCollectionToken;
