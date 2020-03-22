import { connect } from 'react-redux';

import PromoteProduct from './PromoteProduct';

import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  //   image: state.products[1].image,
});

export default connect(mapStateToProps)(PromoteProduct);
