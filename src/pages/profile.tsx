import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { StyledMain } from 'components/App/Main';
import { StyledNavProfileItem, StyledNavProfileList } from 'components/App/NavBar';
import { StyledWrapper } from 'components/App/Wrapper';

import ProfileHeader from '../components/Header/Profile';
import WorkList from '../components/WorkList';
import { IWorkItem } from '../types/work';

const ProfilePage: React.FC = () => {
  const [workList, setWorkList] = useState<IWorkItem[]>([]);
  const topics = [
    {
      title: 'Иллюстрации',
      href: '',
    },
    {
      title: 'Манга',
      href: 'manga',
    },
    {
      title: 'Новеллы',
      href: 'novels',
    },
    {
      title: 'Учеба',
      href: 'study',
    },
    {
      title: 'Пьеса',
      href: 'piece',
    },
    {
      title: 'Видео',
      href: 'video',
    },
    {
      title: 'Анимация',
      href: 'animation',
    },
    {
      title: 'Чистое искусство',
      href: 'arts',
    },
  ];

  useEffect(() => {
    const works: IWorkItem[] = Array.from({ length: 10 }, (e, i) => ({
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
      <StyledWrapper
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1200px',
        }}
      >
        <ProfileHeader />
        <StyledNavProfileList>
          {topics.map((topic, i) => (
            <StyledNavProfileItem key={i} active={i === 0}>
              <Link
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                to={`/profile/${topic.href}`}
              >
                {topic.title}
              </Link>
            </StyledNavProfileItem>
          ))}
        </StyledNavProfileList>
        <WorkList works={workList} itemWidth="calc(100% / 5 - 2px)" itemHeight="238px" />
      </StyledWrapper>
    </StyledMain>
  );
};

export default ProfilePage;
