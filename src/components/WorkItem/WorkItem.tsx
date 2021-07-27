import React from 'react'
import { IWorkItem } from "types/work"

interface WorkItemProps {
  work: IWorkItem;
  index: number;
  showRating?: boolean;
  applyBadges?: boolean;
}

const WorkItem: React.FC<WorkItemProps> = ({ work, applyBadges, showRating, index }) => {
  const badges: string[] = ["gold", "silver", "bronze"];
  const _t = ["20%", "25%", "30%"];

  return (
    <div className="grid-list-item" style={{"--gw": _t[
      [0, 3, 8, 10, 11].includes(index) ? 0 :
      [1, 2, 6, 7, 9].includes(index) ? 2 :
      [4, 5].includes(index) ? 1 : 0
    ]} as React.CSSProperties}>
      <img className="cover" src={work.cover} />
      { showRating && (<div className={`top-position D(f) Jc(c) Ai(c) ${applyBadges && badges[index] || ""}`}>{index + 1}</div>) }
      <div className="overlay D(f) Fld(c) Jc(fe)">
        <div className="line D(f) Ai(c) Jc(sb)">
          <a className="title" href="#">{work.title}</a>
          <div className="buy"><button data-uk-icon="buy" /></div>
        </div>
        <div className="line D(f) Ai(c) Jc(sb)">
          <a className="author D(f) Ai(c)" href="#">
          <img className="author-avatar" src={work.author.avatar} />
            <div className="author-name">{work.author.name}</div>
          </a>
          <div className="work">
            <label className="like">
              <input type="checkbox" />
              <div className="like-wrap">
                <i data-uk-icon="like-0" />
                <i data-uk-icon="like-1" />
              </div>
            </label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem