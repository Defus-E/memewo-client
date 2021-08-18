import React from 'react';

import { StyledWrapper } from 'components/App/Wrapper';

import { StyledCopyRight, StyledFooter } from './styles';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledWrapper className="footer-top" />
      <StyledWrapper
        className="footer-bottom"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <StyledCopyRight>
          © 2021 Memewo
          <div className="links">
            <a href="/#">компания</a>
            <a href="/#">Поддержка</a>
            <a href="/#">Политика конфиденциальности</a>
            <a href="/#">УСЛОВИЯ ОБСЛУЖИВАНИЯ</a>
          </div>
        </StyledCopyRight>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
