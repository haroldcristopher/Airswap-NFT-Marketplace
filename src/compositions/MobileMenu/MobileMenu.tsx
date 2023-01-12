import { FC } from 'react';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import WalletInfo from '../../components/WalletInfo/WalletInfo';
import { AppRoutes } from '../../routes';

import './MobileMenu.scss';

interface MobileMenuProp {
  isHidden: boolean;
  onNavLinkClick: () => void;
  className?: string;
}

const MobileMenu: FC<MobileMenuProp> = ({ isHidden, onNavLinkClick, className = '' }) => {
  const mobileMenuClassName = classNames('mobile-menu', {
    'mobile-menu--is-hidden': isHidden,
  }, className);

  return (
    <div className={mobileMenuClassName}>
      <WalletInfo isBanner={false} />
      <div className="mobile-menu__nav-links">
        <NavLink className="mobile-menu__nav-link" to="" onClick={onNavLinkClick}>My NFTs</NavLink>
        <NavLink className="mobile-menu__nav-link" to="" onClick={onNavLinkClick}>My Activity</NavLink>
        <NavLink className="mobile-menu__nav-link" to="" onClick={onNavLinkClick}>My Listed NFTs</NavLink>
        <NavLink className="mobile-menu__nav-link" to={`/${AppRoutes.listNft}`} onClick={onNavLinkClick}>List NFT</NavLink>
        <a className="mobile-menu__nav-link" target="_blank" rel="noreferrer" href="https://discord.com/invite/ecQbV7H" onClick={onNavLinkClick}>Project Discord</a>
      </div>
    </div>
  );
};

export default MobileMenu;
