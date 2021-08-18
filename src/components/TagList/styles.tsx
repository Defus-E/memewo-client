import styled from 'styled-components';

interface TagProps {
  key: number;
  coverUrl: string;
}

export const StyledTagList = styled.ul`
  display: flex;
  height: 64px;
  width: 100%;
  background: #151515;
  padding: 6px 20px;
  position: relative;
  z-index: 100;
`;

export const StyledTagItem = styled.li`
  ${({ coverUrl }: TagProps) => coverUrl && `--tag-cover: url("${coverUrl}");`}

  height: 52px;
  padding: 0 40px;
  margin-right: 5px;
  position: relative;
  background: #fff var(--tag-cover) center center / cover;

  &:after {
    content: '';
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 30, 30, 0.8);
  }
`;

export const StyledTagLink = styled.a`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 52px;
  font: 500 12px/150% 'Ubuntu', Arial;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
