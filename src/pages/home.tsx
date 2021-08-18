import React, { useEffect, useState } from 'react';

import Banner from 'components/App/Banner';

import { StyledButton } from 'components/App/Button';
import { StyledMain } from 'components/App/Main';
import { StyledTitle } from 'components/App/SectionTitle';
import { StyledWrapper } from 'components/App/Wrapper';
import DailyRating from 'components/DailyRating';
import TagList from 'components/TagList';
import WorkList from 'components/WorkList';
import { IWorkItem } from 'types/work';

const HomePage: React.FC = () => {
  const [workList, setWorkList] = useState<IWorkItem[]>([]);

  useEffect(() => {
    const works: IWorkItem[] = Array.from({ length: 12 }, (e, i) => ({
      title: 'Lorem ipsum',
      cover: `https://picsum.photos/1300/300?random=${i + 1}`,
      author: {
        name: 'Calciumtrice',
        avatar: 'https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1',
      },
    }));

    setWorkList(works);
  }, []);

  return (
    <StyledMain>
      <TagList />
      <Banner />
      <StyledWrapper
        workSwitcher
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '40px',
        }}
      >
        <div style={{ marginLeft: '10px' }}>
          <StyledTitle>Рекомендуемые работы</StyledTitle>
        </div>
        <div>
          <ul className="cats">
            <li className="active">
              <a href="/#">Все работы</a>
            </li>
            <li>
              <a href="/#">2D работы</a>
            </li>
            <li>
              <a href="/#">3D работы</a>
            </li>
          </ul>
        </div>
        <div />
      </StyledWrapper>
      <StyledWrapper
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '20px 0 50px',
        }}
      >
        <WorkList works={workList} useGw />
        <StyledButton
          clear
          loadmore
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'uppercase',
          }}
        >
          Загрузить еще
        </StyledButton>
      </StyledWrapper>
      <DailyRating />
    </StyledMain>
  );
};

export default HomePage;
