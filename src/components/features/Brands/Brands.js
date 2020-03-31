import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  state = {
    brandsOnPage: 6,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleAmountOfBrands);
    this.handleAmountOfBrands();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleAmountOfBrands);
  }

  handleAmountOfBrands = () => {
    const width = window.innerWidth;
    let number = 6;
    if (width >= 992 && width <= 1184) {
      number = 5;
    }
    if (width >= 768 && width < 992) {
      number = 4;
    }
    if (width >= 576 && width <= 768) {
      number = 3;
    }

    if (width < 576) {
      number = 2;
    }

    this.setState({ brandsOnPage: number });
  };

  render() {
    const { brands } = this.props;
    const { brandsOnPage } = this.state;

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
