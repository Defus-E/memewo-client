import React from 'react';

import { Link } from 'react-router-dom';

import { StyledNavBar, StyledNavItem, StyledNavList } from 'components/App/NavBar/styles';

import { StyledBottomHeader } from './styles';

const BottomHeader: React.FC = () => {
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
    {
      title: 'Рейтинг',
      href: '/top',
    },
    {
      title: 'Конкурсы',
      href: '/contests',
    },
  ];

  return (
    <StyledBottomHeader>
      <StyledNavBar>
        <StyledNavList>
          {topics.map((topic, i) => (
            <StyledNavItem key={i}>
              <Link
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                to={topic.href}
              >
                {topic.title}
              </Link>
            </StyledNavItem>
          ))}
        </StyledNavList>
      </StyledNavBar>
    </StyledBottomHeader>
  );
};

export default BottomHeader;
