import React from 'react';

import { Helmet } from 'react-helmet';

const ProfilePage = () => (
  <>
    <Helmet>
      <title>Profile</title>
    </Helmet>
    <main id="main">
      <div className="wrapper D(f) Fld(c)">
        <div className="profile-header D(f) Ai(c) Jc(sb)">
          <div className="block D(f) Ai(c)"><img className="avatar" src="https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1" />
            <div className="user-info">
              <div className="nickname">Calciumtrice</div>
              <div className="indificator">@calciumtrice</div>
            </div>
          </div>
          <div className="block"><button className="btn btn-default Tt(u)">Подписаться</button></div>
        </div>
        <div className="profile-cats">
          <ul className="D(f) Ai(c)">
            <li className="active D(f) Ai(c)"><a className="D(f) Ai(c)" href="#">иллюстрации</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="#">Манга</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="#">Новеллы</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="#">Учеба</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="#">Пьеса</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="#">Видео</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="#">Анимация</a></li>
            <li className="D(f) Ai(c)"><a className="D(f) Ai(c)" href="#">Чистое искусство</a></li>
          </ul>
        </div>
        <div className="profile-body">
          <div className="grid-list D(f) Flw(w)" data-packery="{ &quot;itemSelector&quot;: &quot;.grid-list-item&quot;, &quot;gutter&quot;: 2 }">
            {/* <div className="grid-list-item"><img className="cover" src="https://picsum.photos/300/300?random=1" onError="this.classList.add('onerror')" /> */}
            <div className="grid-list-item"><img className="cover" src="https://picsum.photos/300/300?random=1" />
              <div className="onerror-div" />
              <div className="overlay D(f) Fld(c) Jc(fe)">
                <div className="line D(f) Ai(c) Jc(sb)"><a className="title" href="#">Lorem ipsum</a>
                  <div className="buy"><button data-uk-icon="buy" /></div>
                </div>
                <div className="line D(f) Ai(c) Jc(sb)"><a className="author D(f) Ai(c)" href="#"><img className="author-avatar" src="https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1" />
                    <div className="author-name">Calciumtrice</div>
                  </a>
                  <div className="rating"><label className="like"><input type="checkbox" />
                      <div className="like-wrap"><i data-uk-icon="like-0" /><i data-uk-icon="like-1" /></div>
                    </label></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default ProfilePage;
