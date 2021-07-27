import React, { FC } from 'react';

import UploadArea from "./UploadArea";

const PostWork: FC = () => {
  return (
    <div className="post-work-body D(f)">
      <UploadArea />
      <div className="right D(f) Fld(c)">
        <form>
          <div className="blocks D(f) Fld(c)">
            <div className="block-line D(f) Fld(c)"><input className="input-title input" maxLength={32} type="text" placeholder="Заголовок" /></div>
            <div className="block-line D(f) Fld(c)"><textarea className="input-description input" maxLength={3000} cols={30} rows={5} placeholder="Описание" defaultValue={""} /></div>
            <div className="block-line D(f) Fld(c)"><input className="input-tags input" type="text" placeholder="Теги" name="tags" /></div>
            <div className="block-line D(f)"><label className="label checkbox"><input className="uk-radio" type="radio" name="radio1" /><span>Публичным</span></label><label className="label checkbox"><input className="uk-radio" type="radio" name="radio1" /><span>Частный</span></label></div>
            <div className="block-line D(f) Fld(c)"><button className="btn btn-0 Tt(u)">Опубликовать</button></div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default PostWork;
