/* selectors */
export const getAll = ({ compare }) => compare.products;
export const getCount = ({ compare }) => compare.products.length;

/* action name creator */
const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_COMPARE_PRODUCT = createActionName('ADD_COMPARE_PRODUCT');

/* action creators */
export const addCompareProduct = payload => ({ payload, type: ADD_COMPARE_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COMPARE_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    default:
      return statePart;
  }
}
