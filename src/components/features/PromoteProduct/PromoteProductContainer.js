import { connect } from 'react-redux';

import PromoteProduct from './PromoteProduct';

import { getAll, handleFavoriteProducts } from '../../../redux/productsRedux';
import { getOffers } from '../../../redux/offerRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  offers: getOffers(state),
  //   image: state.products[1].image,
});

const mapDispatchToProps = dispatch => ({
  handleFavoriteProducts: id => dispatch(handleFavoriteProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoteProduct);
