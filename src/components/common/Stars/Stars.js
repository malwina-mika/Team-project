import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class Stars extends React.Component {
  state = {
    starsConfig: [
      {
        id: 1,
        active: false,
      },
      {
        id: 2,
        active: false,
      },
      {
        id: 3,
        active: false,
      },
      {
        id: 4,
        active: false,
      },
      {
        id: 5,
        active: false,
      },
    ],
    reviewState: false,
  };

  review(star) {
    this.setState(({ starsConfig }) => {
      return starsConfig.map(i => {
        if (i.id <= star) {
          i.active = 'active';
        } else {
          i.active = 'inactive';
        }
        return i;
      });
    });
  }

  giveReview(star) {
    this.setState({ reviewState: star });
  }

  mouseOutOfStars() {
    this.setState(({ starsConfig }) => {
      return starsConfig.map(i => {
        i.active = false;
        return i;
      });
    });
  }

  render() {
    const { stars, review } = this.props;
    const { starsConfig, reviewState } = this.state;

    return (
      <div className={styles.stars} onMouseOut={() => this.mouseOutOfStars()}>
        {starsConfig.map(i => (
          <FontAwesomeIcon
            key={i.id}
            onClick={() => this.giveReview(i.id)}
            onMouseOver={() => this.review(i.id)}
            icon={
              (i.active
              ? i.active === 'active'
              : i.id <= (reviewState || review || stars))
                ? faStar
                : farStar
            }
            className={
              (i.active
              ? i.active === 'active'
              : i.id <= (reviewState || review))
                ? styles.active
                : ''
            }
          />
        ))}
      </div>
    );
  }
}

Stars.propTypes = {
  stars: PropTypes.number,
  review: PropTypes.number,
};

export default Stars;
