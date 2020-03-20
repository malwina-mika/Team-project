import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
//import { Swipeable } from 'react-swipeable';
import Swipe from '../../common/Swipe/Swipe';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    favoriteProducts: [],
    compareProducts: [],
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  handleFavoriteProducts(itemId) {
    console.log('favorite clicked');
    this.setState(prevState => ({
      favoriteProducts: [...prevState.favoriteProducts, itemId],
    }));
  }

  handleCompareProducts(itemId) {
    console.log('compare clicked');
    this.setState(prevState => ({
      compareProducts: [...prevState.compareProducts, itemId],
    }));
  }

  render() {
    const { categories, products } = this.props;
    const {
      activeCategory,
      activePage,
      favoriteProducts,
      compareProducts,
    } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipe
        leftAction={() =>
          this.handlePageChange(
            activePage + 1 < pagesCount ? activePage + 1 : activePage
          )
        }
        rightAction={() => this.handlePageChange(activePage > 0 ? activePage - 1 : 0)}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory && styles.active}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-3'>
                <ProductBox
                  {...item}
                  onclick={() => this.handleFavoriteProducts(item.id)}
                  onclick2={e => {
                    e.preventDefault();
                    this.handleCompareProducts(item.id);
                  }}
                  isFavorite={favoriteProducts.indexOf(item.id) !== -1}
                  isCompare={compareProducts.indexOf(item.id) !== -1}
                />
              </div>
            ))}
          </div>
        </div>
      </Swipe>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
