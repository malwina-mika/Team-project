import { connect } from 'react-redux';
import CompareBox from './CompareBox';
// import { addCompareProduct } from '../../../redux/compareRedux';
import { getAll, actionCompareProducts } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  actionCompareProducts: id => dispatch(actionCompareProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareBox);
