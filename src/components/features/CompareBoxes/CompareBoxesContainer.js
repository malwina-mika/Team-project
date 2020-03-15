import { connect } from 'react-redux';
import CompareBoxes from './CompareBaxes';
import { addCompareProduct } from '../../../redux/compareRedux';
import { getAll } from '../../../redux/cartRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  compare: id =>
    dispatch(
      addCompareProduct({
        id,
        image: props.id,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareBoxes);
