import React, { FC } from 'react';

const TagList: FC = () => {
  const names = ["Pokémon", "#MOTHER", "#Animation", "#3DCG", "#Practice", "rabbit", "beautiful girl"]
  const tagList = Array.from({ length: 7 }, (e, i) => ({
    name: names[i],
    cover: `https://picsum.photos/300/300?random=${i + 1}`,
  }));

  return (
    <div className="wrapper-wide D(f) Fld(c) Mt(40px)" id="tags" data-uk-sticky="offset: 64px:top:64;animation: uk-animation-slide-bottom-small">
      <ul className="D(f)">
        {tagList.map((tag, i) => (
          <li key={i} style={{"TagCover": `url("${tag.cover}")`} as React.CSSProperties}>
            <a className="D(f) Ai(c) Jc(c)" href="/#">{tag.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
