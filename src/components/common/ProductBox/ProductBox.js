/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  onclick,
  onclick2,
  isFavorite,
  isCompare,
  compare,
  oldPrice,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <img src={image} alt={name} />
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          variant='outline'
          favoriteClass={isFavorite ? 'favorite' : ''}
          active={compare ? true : undefined}
        >
          <FontAwesomeIcon icon={faHeart} onClick={onclick}>
            Favorite{' '}
          </FontAwesomeIcon>
        </Button>
        <Button
          variant='outline'
          addToCompareClass={isCompare ? 'addToCompare' : ''}
          onClick={onclick2}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare </FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <div className={styles.oldprice}>{oldPrice ? '$ ' + oldPrice : ''}</div>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  compare: PropTypes.bool,
  onclick: PropTypes.func,
  onclick2: PropTypes.func,
};

export default ProductBox;
