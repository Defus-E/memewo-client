import React, { FC } from 'react';

import { Uppy } from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import Input from 'components/App/Input';

import { StyledButton } from 'components/App/Button';

import { StyledBlockLine, StyledBlocks, StyledBody } from './styles';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import './uppy.css';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Russian = require('@uppy/locales/lib/ru_RU');

const uppy = new Uppy({
  debug: true,
  restrictions: {
    maxFileSize: 33554432, // 32 MB
    maxTotalFileSize: 209715200, // 200 MB
    maxNumberOfFiles: 200,
    minNumberOfFiles: 1,
    allowedFileTypes: ['image/*'],
  },
});

uppy.use(XHRUpload, {
  endpoint: 'http://localhost:5000/posts/',
  formData: true,
  method: 'post',
  fieldName: 'files[]',
  bundle: true,
});

const PostWork: FC = () => {
  return (
    <StyledBody>
      <div className="left">
        <Dashboard id="#drag-drop-area" locale={Russian} uppy={uppy} disableInformer hideUploadButton hideRetryButton />
      </div>
      <div className="right">
        <form>
          <StyledBlocks>
            <StyledBlockLine flexDirection="column">
              <Input badged limit={32} placeholder="Заголовок" name="title" />
            </StyledBlockLine>
            <StyledBlockLine flexDirection="column">
              <Input badged textarea limit={3000} placeholder="Описание" name="description" cols={30} rows={5} />
            </StyledBlockLine>
            <StyledBlockLine flexDirection="column">
              <Input tagify placeholder="Теги" name="tags" />
            </StyledBlockLine>
            <StyledBlockLine>
              <label className="label checkbox">
                <input className="uk-radio" type="radio" name="radio1" />
                <span>Публичным</span>
              </label>
              <label className="label checkbox">
                <input className="uk-radio" type="radio" name="radio1" />
                <span>Частный</span>
              </label>
            </StyledBlockLine>
            <StyledBlockLine flexDirection="column">
              <StyledButton
                primary
                style={{
                  textTransform: 'uppercase',
                }}
              >
                Опубликовать
              </StyledButton>
            </StyledBlockLine>
          </StyledBlocks>
        </form>
      </div>
    </StyledBody>
  );
};

export default PostWork;
