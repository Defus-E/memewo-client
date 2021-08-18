import styled from 'styled-components';

interface TitleProps {
  subTitle?: boolean;
}

export const StyledTitle = styled.h2`
  font: ${({ subTitle }: TitleProps) => (subTitle ? '400 10px/150%' : '500 12px/150%')} 'Ubuntu', Arial;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
