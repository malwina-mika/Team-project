/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDealBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

class HotDealBox extends React.Component {
  render() {
    const {
      name,
      price,
      promo,
      stars,
      image,
      onclick,
      isFavorite,
      compare,
      oldPrice,
      children,
    } = this.props;

    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <li key={'dot_' + i}>
          <a className={i === 0 && styles.active}>page {i}</a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className={styles.bar}>
          <div className='row'>
            <div className='col-6'>
              <div className='h6'>
                <p>Hot Deals</p>
              </div>
            </div>
            <div className={'col-6 ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img src={image} alt={name} />
          <div className={styles.cover}>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
            <div className={styles.meter}>
              <ul>
                <li>
                  <a>
                    <p>25</p>
                    <p>days</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>10</p>
                    <p>hrs</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>45</p>
                    <p>mins</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>30</p>
                    <p>secs</p>
                  </a>
                </li>
              </ul>
            </div>
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
            <Button variant='outline'>
              <FontAwesomeIcon icon={faEye}> stars</FontAwesomeIcon>
            </Button>
            <Button variant='outline' favoriteClass={isFavorite ? 'favorite' : ''}>
              <FontAwesomeIcon icon={faHeart} onClick={onclick}>
                Favorite{' '}
              </FontAwesomeIcon>
            </Button>
            <Button variant='outline' active={compare ? true : undefined}>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
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
  }
}

HotDealBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  isFavorite: PropTypes.bool,
  compare: PropTypes.bool,
  onclick: PropTypes.func,
};

export default HotDealBox;
