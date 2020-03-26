import { connect } from 'react-redux';
import Promotion from './Promotion';

const mapStateToProps = state => ({
  promotionLeftBox: state.promotionLeftBox,
  promotionRightBoxOne: state.promotionRightBoxOne,
  promotionRightBoxTwo: state.promotionRightBoxTwo,
});

export default connect(mapStateToProps)(Promotion);
