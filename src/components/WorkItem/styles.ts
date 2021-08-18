import styled from 'styled-components';

type RatingType = 'gold' | 'silver' | 'bronze';

interface RatingProps {
  type?: RatingType;
}

export const StyledWorkOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  flex-direction: column;
  display: flex;
  opacity: 0;
  padding: 24px;
  transition: all 0.3s ease-in 0s;
  background-image: linear-gradient(180deg, transparent, rgba(6, 7, 13, 0.8));
`;

export const StyledWorkItem = styled.div`
  width: calc(var(--gw) - 2px);
  height: 300px;
  position: relative;
  overflow: hidden;

  :hover ${StyledWorkOverlay} {
    transition: all 0.3s ease-in 0s;
    opacity: 1;
  }
`;

export const StyledOverlayLine = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  .title {
    color: #fff;
    font: 600 15px/150% 'Ubuntu', Arial;

    &:hover {
      color: #0065ff;
    }
  }

  .buy {
    button {
      svg {
        color: inherit;
        width: 20px;
        height: 20px;
      }

      &:hover {
        color: #0065ff;
      }
    }
  }

  .author {
    color: #fff;
    display: flex;
    align-items: center;

    .author-name {
      margin-left: 10px;
      font: 400 13px/150% 'Ubuntu', Arial;
    }

    &:hover {
      color: #0065ff;
    }
  }
`;

export const StyledRatingBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: #2d2d2c;
  color: #fff;
  width: 42px;
  height: 42px;
  font: 300 18px/150% 'Ubuntu', Arial;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }: RatingProps) => type === 'gold' && 'background-color: #d7bb49;'}

  ${({ type }: RatingProps) => type === 'silver' && 'background-color: #858585;'}
  
  ${({ type }: RatingProps) => type === 'bronze' && 'background-color: #c8a17e;'}
`;

export const StyledWorkImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 100%;

  & + .onerror-div {
    display: block;
  }
`;
