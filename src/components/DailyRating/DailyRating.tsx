import React, { FC } from "react";
import WorkItem from "components/WorkItem";
import { IWorkItem } from "types/work";

const DailyRating: FC = () => {
  const workList: IWorkItem[] = Array.from({ length: 7 }, (e, i) => ({
    title: "Lorem ipsum",
    cover: `https://picsum.photos/300/300?random=${i + 13}`,
    author: {
      name: "Calciumtrice",
      avatar: "https://sun7-6.userapi.com/s/v1/ig2/uekyyYPL4x9T84wlJd343HpWBUBkzW732w1d5KAHkV0Y4hgWnmWgB1qQHW0Vey0XE7NPRJWGrmaz900WsW7foi9g.jpg?size=50x0&quality=96&crop=0,0,862,862&ava=1",
    }
  }));

  return (
    <div id="rating" data-uk-slider="finite: true">
      <div className="wrapper-wide D(f) Fld(c)">
        <div className="Mstart(10px)">
          <h2 className="section-title">Ежедневный рейтинг</h2>
          <h2 className="sub-section-title">Рейтинг 24 мая</h2>
        </div><a className="slide-prev D(f) Ai(c) Jc(c)" href="#" data-uk-slider-item="previous" data-uk-icon="arow-left" />
        <a className="slide-next D(f) Ai(c) Jc(c)" href="#" data-uk-slider-item="next" data-uk-icon="arow-right" />
        <ul className="D(f) Ai(c) uk-slider-items">
          {workList.map((work, i) => (
            <li key={i}>
              <WorkItem work={work} index={i} showRating applyBadges />
            </li>
          ))};
        </ul>
      </div>
    </div>
  )
};

export default DailyRating;
