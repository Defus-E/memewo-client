import React from 'react';

import { Helmet } from 'react-helmet';

import TagList from "components/TagList";
import DailyRating from "components/DailyRating";
import { IWorkItem } from "types/work";
import WorkList from "components/WorkList";

const HomePage = () => {
  const workListRecommended: IWorkItem[] = Array.from({ length: 12 }, (e, i) => ({
    title: "Lorem ipsum",
    cover: `https://picsum.photos/1300/300?random=${i + 1}`,
    author: {
      name: "Calciumtrice",
      avatar: "https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1",
    }
  }));
  
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main id="main">
        <TagList />
        <div id="even-banner">
          <img alt="none" src="https://previews.123rf.com/images/sabelskaya/sabelskaya1906/sabelskaya190600403/128170491-chinese-new-year-festival-decoration-banner-red-lanterns-from-china-and-traditional-oriental-style-f.jpg" />
        </div>
        <div className="wrapper-wide Mt(40px) D(f) Jc(c) Ai(c) Jc(sb)" id="cat-switcher">
          <div className="Mstart(10px)">
            <h2 className="section-title">Рекомендуемые работы</h2>
          </div>
          <div>
            <ul className="cats D(f) Ai(c) Jc(c)">
              <li className="active"><a href="#">Все работы</a></li>
              <li><a href="#">2D работы</a></li>
              <li><a href="#">3D работы</a></li>
            </ul>
          </div>
          <div />
        </div>
        <div className="wrapper-wide Mt(20px) D(f) Fld(c)" id="recomended">
          <WorkList works={workListRecommended} />
          <button className="btn btn-clear btn-loadmore D(f) Ai(c) Jc(c) Tt(u)">Загрузить еще</button>
        </div>
        <DailyRating />
      </main>
    </>
  )
};

export default HomePage;
