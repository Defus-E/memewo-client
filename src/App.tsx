import React from 'react';

import AppRouterSwitch from 'components/AppRouterSwitch';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from 'components/Footer';
import BottomHeader from 'components/Header/Bottom';
import TopHeader from 'components/Header/Top';

const App: React.FC = () => {
  return (
    <Router>
      <TopHeader />
      <BottomHeader />
      <AppRouterSwitch />
      <Footer />
    </Router>
  );
};

export default App;
