import React from 'react';
import styles from './Promotion.module.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Promotion = ({
  promotionLeftBox,
  promotionRightBoxOne,
  promotionRightBoxTwo,
}) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <div className={styles.leftBox}>
            <div className={styles.leftBoxContent}>
              {ReactHtmlParser(promotionLeftBox)}
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12'>
          <div className='row'>
            <div className='col-12'>
              <div className={styles.rightBoxOne}>
                <div className={styles.rightBoxOneWrapper}>
                  {ReactHtmlParser(promotionRightBoxOne)}
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className={styles.rightBoxTwo}>
                <div className={styles.rightBoxTwoWrapper}>
                  {ReactHtmlParser(promotionRightBoxTwo)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Promotion.propTypes = {
  promotionLeftBox: PropTypes.string,
  promotionRightBoxOne: PropTypes.string,
  promotionRightBoxTwo: PropTypes.string,
};

export default Promotion;
