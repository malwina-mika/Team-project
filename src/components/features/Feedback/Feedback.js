import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  render() {
    const { feedback } = this.props;

    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <li key={'dot_' + i}>
          <a className={i === 0 && styles.active}>page {i}</a>
        </li>
      );
    }

    return (
      <div className={'container ' + styles.root}>
        {feedback
          .filter(item => item.active === true)
          .map(item => (
            <div key={item.id} className='row no-gutters'>
              <div className={styles.heading + ' col-10'}>
                <h3>{item.title}</h3>
              </div>
              <div className={styles.dots + ' col-2'}>
                <ul>{dots}</ul>
              </div>
            </div>
          ))}
        <div className={styles.content}>
          {feedback
            .filter(item => item.active === true)
            .map(item => (
              <div key={item.id}>
                <div className={styles.quote}>
                  <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                </div>
                <p className={styles.text}>{item.text}</p>
                <div className={styles.client + ' row'}>
                  <div className={styles.image + ' col-1'}>
                    <img src={item.image} alt={item.id}></img>
                  </div>
                  <div className={styles.description + ' col-3'}>
                    <p>{item.clientName}</p>
                    <p>{item.clientStatus}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array,
};

export default Feedback;
