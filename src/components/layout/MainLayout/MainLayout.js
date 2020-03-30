import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CompareBox from '../../features/CompareBox/CompareBoxContainer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
    <CompareBox />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
