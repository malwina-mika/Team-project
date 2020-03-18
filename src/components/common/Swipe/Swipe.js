import React from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';

class Swipe extends React.Component {
  render() {
    const { children, leftAction, rightAction } = this.props;

    const config = {
      onSwipedLeft: leftAction,
      onSwipedRight: rightAction,
      preventDefaultTouchmoveEvent: true,
      trackMouse: true,
    };

    return <Swipeable {...config}>{children}</Swipeable>;
  }
}

Swipe.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipe;
