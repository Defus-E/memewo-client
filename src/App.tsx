import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import AppRouterSwitch from 'components/AppRouterSwitch';
import TopHeader from 'components/Header/Top';
import BottomHeader from 'components/Header/Bottom';
import Footer from "components/Footer";

const App = () => {
  return (
    <Router>
      <div className="header-clear" />
      <TopHeader />
      <BottomHeader />
      <AppRouterSwitch />
      <Footer />
    </Router>
  );
};

export default App;
