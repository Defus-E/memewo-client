import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from "./global/styles";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);