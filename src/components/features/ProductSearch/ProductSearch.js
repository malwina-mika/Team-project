import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <div className={styles.menu} role='navigation'>
        <ul>
          <li className={styles.menuItem} aria-haspopup='true'>
            <a href='#'>Select a category</a>
            <ul className={styles.subMenu} aria-label='submenu'>
              <li className={styles.menuItem}>
                <a href='#'>Furniture</a>
              </li>
              <li className={styles.menuItem}>
                <a href='#'>Chair</a>
              </li>
              <li className={styles.menuItem}>
                <a href='#'>Table</a>
              </li>
              <li className={styles.menuItem}>
                <a href='#'>Sofa</a>
              </li>
              <li className={styles.menuItem}>
                <a href='#'>Bedroom</a>
                <ul className={styles.subMenu} aria-label='submenu'>
                  <li className={styles.menuItem}>
                    <a href='#'>Bed</a>
                  </li>
                  <li className={styles.menuItem}>
                    <a href='#'>Wardrobe</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
