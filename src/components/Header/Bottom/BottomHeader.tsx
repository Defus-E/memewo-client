import React from 'react';

const BottomHeader = () => {
  const topics = [
    'Иллюстрации',
    'Манга',
    'Новеллы',
    'Учеба',
    'Пьесса',
    'Видео',
    'Анимация',
    'Чистое искусство',
    'Рейтинг',
    'Конкурсы',
  ]

  return (
    <div className="bottom-header">
    <nav className="navi D(f) Ai(c) Jc(c)">
      <ul className="D(f) Ai(c)">
        {topics.map((topic, i) => (
          <li key={i}><a className="D(f) Ai(c)" href="/#">{topic}</a></li>
        ))}
      </ul>
    </nav>
  </div>
  );
};

export default BottomHeader;
