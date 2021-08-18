import React, { FC } from 'react';

import { StyledTitle } from 'components/App/SectionTitle';
import { StyledWrapper } from 'components/App/Wrapper';
import WorkItem from 'components/WorkItem';
import { IWorkItem } from 'types/work';

import { StyledDirectionArrow } from '../App/DirectionArrow';

const DailyRating: FC = () => {
  const workList: IWorkItem[] = Array.from({ length: 7 }, (e, i) => ({
    title: 'Lorem ipsum',
    cover: `https://picsum.photos/300/300?random=${i + 13}`,
    author: {
      name: 'Calciumtrice',
      avatar: 'https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1',
    },
  }));

  return (
    <div
      data-uk-slider="finite: true"
      style={{
        position: 'relative',
      }}
    >
      <StyledWrapper
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ marginLeft: '10px' }}>
          <StyledTitle>Ежедневный рейтинг</StyledTitle>
          <StyledTitle subTitle>Рейтинг 24 мая</StyledTitle>
        </div>
        <StyledDirectionArrow direction="prev" />
        <StyledDirectionArrow direction="next" />
        <ul
          className="uk-slider-items"
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            margin: '10px 0 0',
            zIndex: 100,
          }}
        >
          {workList.map((work, i) => (
            <li
              key={i}
              style={{
                width: 'calc(100%/5 - 2px)',
                margin: '0 1px',
              }}
            >
              <WorkItem work={work} index={i} showRating />
            </li>
          ))}
          ;
        </ul>
      </StyledWrapper>
    </div>
  );
};

export default DailyRating;
