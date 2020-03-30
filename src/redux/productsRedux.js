/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_FAVORITE = createActionName('ADD_FAVORITE');
export const COMPARE = createActionName('COMPARE');

// action creators
export const handleFavoriteProducts = id => ({ id, type: ADD_FAVORITE });
export const actionCompareProducts = id => ({ id, type: COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FAVORITE:
      return statePart.map(item => {
        if (item.id === action.id) {
          item.favorite = !item.favorite;
        }
        return item;
      });
    case COMPARE:
      return statePart.map(item => {
        if (item.id === action.id) {
          item.addCompare = !item.addCompare;
        }
        return item;
      });
    default:
      return statePart;
  }
}
