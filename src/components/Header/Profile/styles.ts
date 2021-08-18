import styled from 'styled-components';

export const StyledProfileHeader = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .user-info {
    margin-left: 40px;
    color: #fff;

    .nickname {
      font: 400 15px/120% 'Ubuntu', Arial;
      letter-spacing: 1px;
    }

    .indificator {
      margin-top: 5px;
      font: 400 12px/120% 'Ubuntu', Arial;
      letter-spacing: 1px;
    }
  }
`;
