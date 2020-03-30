import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromoteProduct from '../../features/PromoteProduct/PromoteProductContainer';
import Promotion from '../../features/Promotion/PromotionContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';


const Homepage = () => (
  <div className={styles.root}>
    <PromoteProduct />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
