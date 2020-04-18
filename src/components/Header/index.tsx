import * as React from 'react';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderMenuLeft,
  HeaderMenuRight,
  SiteLogo,
  ModeSwitchButton,
  TogglerSlider,
} from './styles';
import { ContrastContext } from '../../context/Contrast';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);

  return (
    <>
      <HeaderWrapper>
        <HeaderNav>
          <HeaderMenuLeft>
            <SiteLogo to="/">Universitetsforlaget Test</SiteLogo>
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
