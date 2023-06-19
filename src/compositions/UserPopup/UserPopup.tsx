import {
  FC,
  forwardRef,
  ReactElement,
  Ref,
  RefAttributes,
} from 'react';

import { NavLink } from 'react-router-dom';

import WalletInfo from '../../components/WalletInfo/WalletInfo';
import { AppRoutes, ProfileRoutes } from '../../routes';

import './UserPopup.scss';

interface UserPopupProps {
  address?: string;
  ensAddress?: string;
  onLogoutButtonClick: () => void;
  className?: string;
}

export type UserPopupWithRefProps = UserPopupProps & RefAttributes<HTMLDivElement>;

const UserPopup: FC<UserPopupWithRefProps> = forwardRef(({
  address,
  ensAddress,
  onLogoutButtonClick,
  className = '',
}, ref: Ref<HTMLDivElement>): ReactElement => (
  <div ref={ref} className={`user-popup ${className}`}>
    <WalletInfo
      address={address}
      ensAddress={ensAddress}
      onLogoutButtonClick={onLogoutButtonClick}
      className="user-popup__wallet-info"
      avatarClassName="user-popup__wallet-info-avatar"
    />
    <NavLink to={`/${AppRoutes.profile}/${address}`} className="user-popup__nav-link">Profile</NavLink>
    <NavLink to={`/${AppRoutes.profile}/${address}`} className="user-popup__nav-link">NFTs</NavLink>
    <NavLink to={`/${AppRoutes.profile}/${address}/${ProfileRoutes.orders}`} className="user-popup__nav-link">Listed</NavLink>
    <NavLink to={`/${AppRoutes.profile}/${address}/${ProfileRoutes.activity}`} className="user-popup__nav-link">Activity</NavLink>
  </div>
));

export default UserPopup;
