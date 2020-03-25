import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromoteProduct.module.scss';
import HotDealBox from '../../common/HotDealBox/HotDealBox';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class PromoteProduct extends React.Component {
  state = {
    id: 'aenean-ru-bristique-4',
  };

  handleFavoriteProducts(event, itemId) {
    event.preventDefault();
    this.props.handleFavoriteProducts(itemId);
  }

  render() {
    const { products } = this.props;
    const { id } = this.state;
    const promote = products.filter(item => item.id === id);

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
        <div className='container'>
          <div className='row'>
            <div className={'col-4 ' + styles.hotDeal}>
              {promote.map(item => (
                <HotDealBox
                  key={item.id}
                  promo=''
                  {...item}
                  onclick={e => this.handleFavoriteProducts(e, item.id)}
                  isFavorite={item.favorite}
                ></HotDealBox>
              ))}
            </div>
            <div className='col-8'>
              <div className={styles.offer}>
                <div className={styles.img}>
                  <img src={products[1].image} alt='123'></img>
                </div>
                <div className={styles.slogan}>
                  <div className={styles.textBox}>
                    <h2>
                      Indoor <span>furniture</span>
                    </h2>
                    <p>Save up to 50% of all furniture</p>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PromoteProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      image: PropTypes.string,
    })
  ),
  handleFavoriteProducts: PropTypes.func,
};

export default PromoteProduct;
