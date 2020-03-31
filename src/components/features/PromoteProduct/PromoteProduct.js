import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromoteProduct.module.scss';
import HotDealBox from '../../common/HotDealBox/HotDealBox';
import OfferBox from '../../common/OfferBox/OfferBox';

class PromoteProduct extends React.Component {
  handleFavoriteProducts(event, itemId) {
    event.preventDefault();
    this.props.handleFavoriteProducts(itemId);
  }

  handleCompareProducts(event, itemId) {
    event.preventDefault();
    this.props.actionCompareProducts(itemId);
  }

  render() {
    const { products, offers } = this.props;
    // const { id } = this.state;
    const promote = products.filter(item => item.promote === true);
    const offer = offers.filter(item => item.active === true);
    const compareProducts = products.filter(item => item.addCompare === true);

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
            <div className='d-none d-md-block col-md-4'>
              {promote.map(item => (
                <HotDealBox
                  key={item.id}
                  promo=''
                  {...item}
                  onclick={e => this.handleFavoriteProducts(e, item.id)}
                  compareProduct={
                    compareProducts.length < 4
                      ? e => {
                          this.handleCompareProducts(e, item.id);
                        }
                      : null
                  }
                  isFavorite={item.favorite}
                  isCompare={item.addCompare}
                ></HotDealBox>
              ))}
            </div>
            <div className='col-12 col-md-8'>
              {offer.map(item => (
                <OfferBox key={item.id} {...item}></OfferBox>
              ))}
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
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      active: PropTypes.bool,
    })
  ),

  handleFavoriteProducts: PropTypes.func,
  actionCompareProducts: PropTypes.func,
};

export default PromoteProduct;
