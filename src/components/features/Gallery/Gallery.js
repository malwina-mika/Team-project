import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import ReactHtmlParser from 'react-html-parser';
import Stars from '../../common/Stars/Stars';
import ReactTooltip from 'react-tooltip';

class Gallery extends React.Component {
  state = {
    activeProduct: 12,
    amountOfProduct: 7,
  };

  handleFavoriteProducts(event, itemId) {
    event.preventDefault();
    this.props.handleFavoriteProducts(itemId);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleAmountOfImg);
    this.handleAmountOfImg();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleAmountOfImg);
  }

  handleAmountOfImg = () => {
    const width = window.innerWidth;
    let number = 7;
    if (width <= 650) {
      number = 5;
    }
    if (width > 650) {
      number = 6;
    }
    this.setState({ amountOfProduct: number });
  };

  handlePageChange(newPage) {
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 1000);
  }
  render() {
    const { activeProduct, amountOfProduct } = this.state;
    const { products, galleryRightBox } = this.props;
    const product = products[activeProduct];

    const gallery = [];
    const mockupData = [
      products[10].image,
      products[11].image,
      product.image,
      products[13].image,
      products[14].image,
      products[15].image,
      products[16].image,
    ];
    for (let i = 0; i < amountOfProduct; i++) {
      gallery.push(
        <img
          key={'gallery' + i}
          src={mockupData[i]}
          alt={mockupData[i]}
          className={i + 10 === activeProduct ? styles.activeImage : ''}
        />
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 '>
              <div className={styles.navBar}>
                <div className={styles.heading}>
                  <h3>FURNITURE GALLERY</h3>
                </div>
                <ul className={'row ' + styles.list}>
                  <li>FEATURES</li>
                  <li className={styles.activeOption}>TOP SELLER</li>
                  <li>SALE OFF</li>
                  <li>TOP RATTED</li>
                </ul>

                <div className={styles.content}>
                  <div className={styles.img}>
                    <img src={products[12].image} alt=''></img>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.price}>
                      <div>$ {product.price}</div>
                      <div className={styles.oldprice}>
                        {product.oldPrice ? '$ ' + product.oldPrice : ''}
                      </div>
                    </div>
                    <div className={styles.frame}>
                      <h5>{product.name}</h5>
                      <div className={styles.stars}>
                        <Stars stars={product.stars} review={product.review} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles.outlines}>
                      <Button
                        variant='outlineTwo'
                        onClick={e => this.handleFavoriteProducts(e, product.id)}
                        favoriteClass={product.favorite ? 'favorite' : ''}
                        data-tip='Add to favorite'
                        data-for='favorite'
                      >
                        <ReactTooltip
                          place='right'
                          id='favorite'
                          className={styles.tooltip}
                        ></ReactTooltip>
                        <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                      </Button>
                      <Button
                        variant='outlineTwo'
                        data-tip='Compare'
                        data-for='compare'
                      >
                        <ReactTooltip
                          place='right'
                          id='compare'
                          className={styles.tooltip}
                        ></ReactTooltip>
                        <FontAwesomeIcon icon={faExchangeAlt}>
                          <span>Compare</span>
                        </FontAwesomeIcon>
                      </Button>
                      <Button
                        variant='outlineTwo'
                        data-tip='Quick view'
                        data-for='view'
                      >
                        <ReactTooltip
                          place='right'
                          id='view'
                          className={styles.tooltip}
                        ></ReactTooltip>
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      </Button>
                      <Button
                        variant='outlineTwo'
                        data-tip='Add to cart'
                        data-for='cart'
                      >
                        <ReactTooltip
                          place='right'
                          id='cart'
                          className={styles.tooltip}
                        ></ReactTooltip>
                        <FontAwesomeIcon icon={faShoppingBasket}>
                          Add to cart
                        </FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                  <p className='addCard'>Add to cart</p>
                </div>
                <div className={'row ' + styles.arrows}>
                  <Button className='col-1 ' variant='arrow'>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Button>
                  <div className={'col-10 '}>
                    <div className={'row ' + styles.gallery}>{gallery}</div>
                  </div>
                  <Button className='col-1 ' variant='arrow'>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 '>
              <div className={styles.offer}>
                <div className={styles.img}>
                  <img src={products[14].image} alt=''></img>
                </div>
                <div className={styles.textBox}>
                  {ReactHtmlParser(galleryRightBox)}
                  <Button variant='green'>Shop now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  childer: PropTypes.node,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      category: PropTypes.string,
      favorite: PropTypes.bool,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      oldPrice: PropTypes.number,
      review: PropTypes.number,
    })
  ),
  galleryRightBox: PropTypes.string,
  handleFavoriteProducts: PropTypes.func,
};

export default Gallery;
