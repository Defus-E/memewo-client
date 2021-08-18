import React from 'react';

import { IWorkItem } from 'types/work';

import { StyledAvatar } from '../App/Avatar';
import Like from '../App/Like';
import { StyledOverlayLine, StyledRatingBlock, StyledWorkImage, StyledWorkItem, StyledWorkOverlay } from './styles';

export interface WorkItemProps {
  work: IWorkItem;
  index: number;
  useGw?: boolean;
  showRating?: boolean;
  itemWidth?: React.CSSProperties['width'];
  itemHeight?: React.CSSProperties['height'];
}

const WorkItem: React.FC<WorkItemProps> = ({ work, itemWidth, itemHeight, useGw, showRating, index }) => {
  const badges: Array<'gold' | 'silver' | 'bronze'> = ['gold', 'silver', 'bronze'];
  const transform = ['20%', '25%', '30%'];

  return (
    <StyledWorkItem
      className="work-list-item"
      style={
        {
          '--gw': useGw && transform[[0, 3, 8, 10, 11].includes(index) ? 0 : [1, 2, 6, 7, 9].includes(index) ? 2 : [4, 5].includes(index) ? 1 : 0],
          width: itemWidth,
          height: itemHeight,
        } as React.CSSProperties
      }
    >
      <StyledWorkImage src={work.cover} />
      <div className="onerror-div"></div>
      {showRating && <StyledRatingBlock type={badges[index]}>{index + 1}</StyledRatingBlock>}
      <StyledWorkOverlay>
        <StyledOverlayLine>
          <a className="title" href="/#">
            {work.title}
          </a>
          <div className="buy">
            <button data-uk-icon="buy" />
          </div>
        </StyledOverlayLine>
        <StyledOverlayLine>
          <a className="author" href="/#">
            <StyledAvatar size="24" src={work.author.avatar} />
            <div className="author-name">{work.author.name}</div>
          </a>
          <div className="work">
            <Like />
          </div>
        </StyledOverlayLine>
      </StyledWorkOverlay>
    </StyledWorkItem>
  );
};

export default WorkItem;
