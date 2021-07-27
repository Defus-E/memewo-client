import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/home';
import ProfilePage from "pages/profile";
import TopPage from "pages/top";
import PostPage from "pages/post";

const AppRouterSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path='/profile' component={ProfilePage} />
      <Route exact path='/post' component={PostPage} />
      <Route exact path='/top' component={TopPage} />
      {/* <Route exact path='/mod' component={Mod} /> */}
    </Switch>
  );
};

export default AppRouterSwitch;
