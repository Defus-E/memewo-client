import styled from 'styled-components';

interface AvatarProps {
  size?: string | number;
  alt?: string;
}

export const StyledAvatar = styled.img.attrs(({ alt }: AvatarProps) => ({ alt: alt ?? '?' }))`
  border-radius: 100%;
  width: ${({ size }: AvatarProps) => size ?? '80'}px;
  height: ${({ size }: AvatarProps) => size ?? '80'}px;
`;
