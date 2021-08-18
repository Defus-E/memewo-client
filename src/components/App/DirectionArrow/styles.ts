import styled from 'styled-components';

interface DirectionArrowProps {
  direction: 'prev' | 'next';
}

export const StyledDirectionArrow = styled.a.attrs(({ direction }: DirectionArrowProps) => ({
  href: '#',
  className: `slide-${direction} uk-icon`,
  'data-uk-slider-item': `${direction === 'prev' ? 'previous' : 'next'}`,
  'data-uk-icon': `arrow-${direction === 'prev' ? 'left' : 'right'}`,
}))`
  ${({ direction }: DirectionArrowProps) => (direction === 'prev' ? 'left' : 'right')}: 0;
  background-image: linear-gradient(${({ direction }: DirectionArrowProps) => (direction === 'prev' ? '-' : '')}90deg, transparent, rgba(6, 7, 13, 0.8));
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  top: 34px;
  bottom: 0;
  z-index: 200;
  width: 100px;
  visibility: visible !important;
  opacity: 1;

  > svg {
    width: 32px;
    height: 32px;
    color: #fff !important;
  }
`;
