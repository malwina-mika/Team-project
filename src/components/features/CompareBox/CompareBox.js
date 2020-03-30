import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompareBox.module.scss';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class CompareBox extends React.Component {
  handleCompareProducts(event, itemId) {
    event.preventDefault();
    this.props.actionCompareProducts(itemId);
  }

  render() {
    const { products } = this.props;

    const compareProducts = products.filter(item => item.addCompare === true);

    const ifCompareEmpty = compareProducts.length > 0;

    return (
      <div className={ifCompareEmpty ? styles.wrapper + ' container' : styles.noShow}>
        {products
          .filter(item => item.addCompare === true)
          .map(item => (
            <div key={item.id} className={styles.imageBox}>
              <img
                src={item.addCompare ? item.image : ''}
                alt={item.addCompare ? item.name : ''}
              ></img>
              <Button
                onClick={e => {
                  this.handleCompareProducts(e, item.id);
                }}
              >
                <FontAwesomeIcon icon={faTimes}>Close </FontAwesomeIcon>
              </Button>
            </div>
          ))}
        <Button className={styles.compareButton} variant='outline'>
          Compare
        </Button>
      </div>
    );
  }
}

CompareBox.propTypes = {
  products: PropTypes.array,
  actionCompareProducts: PropTypes.func,
};

export default CompareBox;
