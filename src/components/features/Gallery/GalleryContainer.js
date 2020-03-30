import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll, handleFavoriteProducts } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  galleryRightBox: state.galleryRightBox,
});

const mapDispatchToProps = dispatch => ({
  handleFavoriteProducts: id => dispatch(handleFavoriteProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
