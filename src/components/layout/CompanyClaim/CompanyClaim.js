import React from 'react';
import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const CompanyClaim = ({ number = 0 }) => {
  const isNotMobile = useMediaQuery({
    query: '(min-width: 767px)',
  });
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`align-items-center ${isNotMobile && 'row'} ${styles.flex}`}>
          <div className={`col text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>

          <div className={`col text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>
                {number > 99999 ? 99999 : number}
              </div>
            </a>
          </div>

          <div className={`col text-center' ${styles.img}`}>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

CompanyClaim.propTypes = {
  number: PropTypes.number,
};

export default CompanyClaim;
