import React from 'react';

const TopHeader = () => {
  return (
    <div className="top-header D(f) Ai(c)"><a className="logo D(f) Ai(c) Jc(c)" href="/"><span>Memewo</span></a>
      <div className="search"><button data-uk-icon="search" /><input className="search-input" type="text"
          placeholder="Поиск..." /></div><button className="btn btn-0 btn-auth Tt(u)"
        data-uk-toggle="#modal-login">Присоединиться</button>
      <ul className="top-menu D(f) Ai(c)">
        <li><a className="D(f) Ai(c) Jc(c)" href="/#" data-uk-icon="message" /></li>
        <li><a className="D(f) Ai(c) Jc(c)" href="/#" data-uk-icon="bell" /></li>
        <li><a className="D(f) Ai(c) Jc(c)" href="/#"><img
              src="https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1" /></a>
        </li>
        <div className="user-drop" data-uk-dropdown="animation: uk-animation-slide-top-small; duration: 300;mode:click">
          <div className="profile D(f) Fld(c)"><a className="user D(f) Ai(c)" href="#"><img
                src="https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1" />
              <div className="user-info">
                <div className="nickname">Calciumtrice</div>
                <div className="indificator">@calciumtrice</div>
              </div>
            </a>
            <div className="stats D(f) Jc(sb) Ai(c)"><a href="/#" className="D(f) Fld(c)">
                <div className="count-num">100</div>
                <div className="count-title">Подписчиков</div>
              </a><a href="/#" className="D(f) Fld(c)">
                <div className="count-num">1</div>
                <div className="count-title">Подписок</div>
              </a></div>
          </div>
          <ul className="drop-menu">
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#">Панель управления</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#">Управление запросами</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#">Закладки</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#">История просмотра</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#">Маркеры</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#">Управление деньгами</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#lang-select" data-uk-toggle>Язык ; Русский</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#">Настройки</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#">Отправить отзыв</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="/#">Выход</a></li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default TopHeader;
