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

class Gallery extends React.Component {
  state = {
    activeProduct: 12,
  };

  handleFavoriteProducts(event, itemId) {
    event.preventDefault();
    this.props.handleFavoriteProducts(itemId);
  }

  render() {
    const { activeProduct } = this.state;
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
    for (let i = 0; i < mockupData.length; i++) {
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
            <div className='col-6 '>
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
                      >
                        <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                      </Button>
                      <Button variant='outlineTwo'>
                        <FontAwesomeIcon icon={faExchangeAlt}>
                          <span>Compare</span>
                        </FontAwesomeIcon>
                      </Button>
                      <Button variant='outlineTwo'>
                        <FontAwesomeIcon icon={faEye}>View details</FontAwesomeIcon>
                      </Button>
                      <Button variant='outlineTwo'>
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
            <div className='col-6 '>
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
