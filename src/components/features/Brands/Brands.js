import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  render() {
    const { brands } = this.props;
    const brandsOnPage = 6;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.brandsWrapper}>
            <button>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={styles.brands}>
              {brands.slice(0, brandsOnPage).map(({ id, name, image }) => (
                <div className={styles.brand} key={id}>
                  <img src={image} alt={name} />
                </div>
              ))}
            </div>
            <button>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
