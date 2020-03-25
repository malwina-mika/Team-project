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
    deviceType: 'mobile',
    fade: true,
    itemsNumber: [],
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const width = window.innerWidth;
    let type = 'mobile';
    if (width <= 768) {
      type = 'mobile';
    }
    if (width > 768 && width <= 1024) {
      type = 'tablet';
    }
    if (width > 1024) {
      type = 'desktop';
    }
    this.setState({ deviceType: type });
  };

  handlePageChange(newPage) {
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 1000);
  }

  handleCategoryChange(newCategory) {
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
    }, 1000);
  }

  handleFavoriteProducts(event, itemId) {
    event.preventDefault();
    this.props.handleFavoriteProducts(itemId);
  }

  handleFade() {
    this.setState({ fade: false });

    setTimeout(() => {
      this.setState({
        fade: true,
      });
    }, 1000);
  }

  handleCompareProducts(event, itemId) {
    event.preventDefault();
    this.props.actionCompareProducts(itemId);
  }

  handleNumber(itemId) {
    if (this.state.itemsNumber.includes(itemId)) {
      // this.state.itemsNumber = this.state.itemsNumber.filter(item => item !== itemId);
      this.setState({
        itemsNumber: this.state.itemsNumber.filter(item => item !== itemId),
      });
    } else {
      // this.state.itemsNumber.push(itemId);
      this.setState({
        itemsNumber: this.state.itemsNumber.push(itemId),
      });
    }
    console.log(this.state.itemsNumber);
  }

  render() {
    const { categories, products } = this.props;

    const { activeCategory, activePage, deviceType, fade } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount =
      deviceType === 'mobile'
        ? Math.ceil(categoryProducts.length / 2)
        : deviceType === 'tablet'
        ? Math.ceil(categoryProducts.length / 3)
        : Math.ceil(categoryProducts.length / 8);
    const productsCount = deviceType === 'mobile' ? 2 : deviceType === 'tablet' ? 3 : 8;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => {
              this.handlePageChange(i);
              this.handleFade();
            }}
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
                <div className={'col-7 col-md-2 ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col-12 col-md-8 ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory && styles.active}
                          onClick={() => {
                            this.handleCategoryChange(item.id);
                            this.handleFade();
                          }}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-12 col-md-2 ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className={fade ? styles.fadein : styles.fadeout}>
            <div className='row'>
              {categoryProducts
                .slice(activePage * productsCount, (activePage + 1) * productsCount)
                .map(item => (
                  <div key={item.id} className='col-sm-6 col-md-4 col-xl-3'>
                    <ProductBox
                      {...item}
                      onclick={e => this.handleFavoriteProducts(e, item.id)}
                      compareProduct={e => {
                        this.handleCompareProducts(e, item.id);
                        this.handleNumber(item.id);
                      }}
                      isFavorite={item.favorite}
                      isCompare={item.addCompare}
                    />
                  </div>
                ))}
            </div>
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
  handleFavoriteProducts: PropTypes.func,
  actionCompareProducts: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
