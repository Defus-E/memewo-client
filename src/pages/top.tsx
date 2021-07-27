import React from 'react';

import { Helmet } from 'react-helmet';

import WorkList from "components/WorkList";
import { IWorkItem } from "types/work";

const TopListPage = () => {
  const workList: IWorkItem[] = Array.from({ length: 7 }, (e, i) => ({
    title: "Lorem ipsum",
    cover: `https://picsum.photos/300/300?random=${i + 1}`,
    author: {
      name: "Calciumtrice",
      avatar: "https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1",
    }
  }));

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <main id="main">
        <div className="rating-filter Mt(40px) D(f) Jc(c) Ai(c) Jc(sb)">
          <div className="Mstart(10px)">
            <h2 className="section-title">Общий рейтинг</h2>
          </div>
          <div>
            <ul className="cats D(f) Ai(c) Jc(c)">
              <li className="active"><a href="/#">Ежедневно</a></li>
              <li><a href="/#">Еженедельно</a></li>
              <li><a href="/#">Ежемесячно</a></li>
            </ul>
          </div>
          <div />
        </div>
        <div className="rating-works">
          <WorkList works={workList} />
        </div>
      </main>
    </>
  )
};

export default TopListPage;
