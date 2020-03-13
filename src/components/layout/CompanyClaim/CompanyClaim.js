import React from 'react';
import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = ({ number = 0 }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={`col text-left ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>
        <div className='col text-center'>
          <a href='#'>
            <img src='/images/logo.png' alt='Bazar' />
          </a>
        </div>
        <div className={`col text-right ${styles.cart}`}>
          <a href='#' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>{number > 99999 ? 99999 : number}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

CompanyClaim.propTypes = {
  number: PropTypes.number,
};

export default CompanyClaim;
