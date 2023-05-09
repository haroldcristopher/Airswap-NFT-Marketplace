import React, { FC } from 'react';

import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import BuyNftWidgetHeader from '../BuyNftWidgetHeader/BuyNftWidgetHeader';

interface DisconnectedBuyNftWidgetProps {
  isLoading: boolean;
  nftId: number;
  className?: string;
}

const DisconnectedBuyNftWidget: FC<DisconnectedBuyNftWidgetProps> = ({ isLoading = false, nftId, className = '' }) => (
  <div className={`buy-nft-widget ${className}`}>
    <BuyNftWidgetHeader
      title="Buy NFT"
      nftId={nftId}
      className="buy-nft-widget__header"
    />
    {isLoading && <LoadingSpinner className="buy-nft-widget__loading-spinner" />}
  </div>
);

export default DisconnectedBuyNftWidget;
