/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import styles from './OfferBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({ name, title, subtitle, image }) => {
  return (
    <div className={styles.offer}>
      <div className={styles.img}>
        <img src={image} alt={name}></img>
      </div>
      <div className={styles.slogan}>
        <div className={styles.textBox}>
          <h2>
            {ReactHtmlParser(title)} {/* Indoor <span>furniture</span> */}
          </h2>
          <p>{subtitle}</p>
        </div>
        <Button variant='outline'>Shop now</Button>
      </div>
      <div className={styles.arrows}>
        <Button variant='small'>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ProductBox;
