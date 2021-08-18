import React from 'react';

import { StyledAvatar } from 'components/App/Avatar';
import { StyledButton } from 'components/App/Button';

import { StyledProfileHeader } from './styles';

const ProfileHeader: React.FC = () => {
  return (
    <StyledProfileHeader>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <StyledAvatar src="https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1" />
        <div className="user-info">
          <div className="nickname">Calciumtrice</div>
          <div className="indificator">@calciumtrice</div>
        </div>
      </div>
      <div>
        <StyledButton def style={{ textTransform: 'uppercase' }}>
          Подписаться
        </StyledButton>
      </div>
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
