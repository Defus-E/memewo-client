import React from 'react';

import Logo from 'components/App/Logo';
import { Link } from 'react-router-dom';

import { StyledButton } from 'components/App/Button';
import { StyledMenuItem, StyledMenuList } from 'components/App/Menu';
import { StyledSearchBox, StyledSearchButton, StyledSearchInput } from 'components/App/SearchBox';

import { StyledAvatar } from '../../App/Avatar';
import { StyledTopHeader } from './styles';

const TopHeader: React.FC = () => {
  return (
    <>
      <div style={{ height: '128px' }}></div>
      <StyledTopHeader>
        <Logo />
        <StyledSearchBox>
          <StyledSearchButton />
          <StyledSearchInput />
        </StyledSearchBox>
        <Link to="/profile">
          <StyledButton auth primary style={{ textTransform: 'uppercase' }}>
            Присоединиться
          </StyledButton>
        </Link>
        <StyledMenuList>
          <StyledMenuItem>
            <a href="/#" data-uk-icon="message" />
          </StyledMenuItem>
          <StyledMenuItem>
            <a href="/#" data-uk-icon="bell" />
          </StyledMenuItem>
          <StyledMenuItem>
            <a href="/#">
              <StyledAvatar
                size="32"
                src="https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1"
              />
            </a>
          </StyledMenuItem>
        </StyledMenuList>
      </StyledTopHeader>
    </>
  );
};

export default TopHeader;
