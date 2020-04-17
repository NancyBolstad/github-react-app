import * as React from 'react';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderMenuLeft,
  HeaderMenuRight,
  HeaderNavLinkList,
  HeaderNavLink,
  SiteLogo,
  ModeSwitchButton,
  TogglerSlider,
  MobileMenuIcon,
  MobileMenuWrapper,
} from './styles';
import { ContrastContext } from '../../context/Contrast';
import { hamburger, cross } from '../../util/icons';
import useIsDesktop from '../../hooks/useIsDesktop';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  const isDesktop = useIsDesktop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <HeaderWrapper>
        <HeaderNav>
          <HeaderMenuLeft>
            <SiteLogo
              to="/"
              onClick={e => {
                if (!isDesktop) {
                  e.preventDefault();
                  window.location.assign('/');
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              Github API Table
            </SiteLogo>
          </HeaderMenuLeft>
          <HeaderMenuRight>
            <ModeSwitchButton onClick={() => toggleContrast()}>
              <span role="img" aria-label="default mode">
                🌞
              </span>
              <span role="img" aria-label="dark mode">
                🌛
              </span>
              <TogglerSlider mode={theme} />
            </ModeSwitchButton>
          </HeaderMenuRight>
        </HeaderNav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
