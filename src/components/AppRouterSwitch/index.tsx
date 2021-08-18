import React from 'react';

import HomePage from 'pages/home';
import PostPage from 'pages/post';
import ProfilePage from 'pages/profile';
import TopPage from 'pages/top';
import { Route, Switch } from 'react-router-dom';

const AppRouterSwitch: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/profile/:type?" component={ProfilePage} />
      <Route exact path="/post" component={PostPage} />
      <Route exact path="/top" component={TopPage} />
      {/* <Route exact path='/mod' component={Mod} /> */}
    </Switch>
  );
};

export default AppRouterSwitch;
