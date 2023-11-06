/* eslint-disable no-case-declarations */
import {
  GET_ALL_PRODUCTS,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  CREATE_PRODUCT,
  CREATE_USER,
  DELETE_PRODUCT,
  GET_ALL_USERS,
  GET_USERS_BY_NAME,
  UPDATE_USER,
  GET_BY_ID,
  GET_PRODUCTS_BY_NAME,
  CLEAR_ERRORS,
  ERRORS,
  FILTROS_AND_PAGINATION,
  USER_LOGIN,
  USER_LOGOUT,
  GET_ALL_SELECTS,
  LOCALSTORAGE,
  ADD_TO_CART,
  REMOVE_SHIPPING,
  UPDATE_SHIPPING,
  ADD_SHIPPING,
  REGISTER_USER,
  UPDATE_PRODUCT,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY,

} from "./actions";

const initialState = {
  allProducts: [],
  productDetail: [],
  allFavorites: [],
  productShow: [],
  indexProductShow: [],
  allUsers: [],
  cart: [],
  errors: {},
  selectFilter: {},
  page: null,
  localstorage: [],
  user: null, // Agregar el estado del usuario
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
      case REMOVE_FROM_CART:
        const productIdToRemove = action.payload;
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== productIdToRemove),
        };
  
      case UPDATE_CART_ITEM_QUANTITY:
        const { productId, newQuantity } = action.payload;
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, cantidad: newQuantity } : item
          ),
        };
    case LOCALSTORAGE:
      return {
        ...state,
        localstorage: [action.payload],
      };
   

    case GET_BY_ID:
      return {
        ...state,
        productDetail: action.payload,
      };
    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        productShow: action.payload,
      };
      case UPDATE_PRODUCT:
        return action.payload;

    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case GET_USERS_BY_NAME:
      return {
        ...state,
        allUsers: action.payload,
      };

    case CREATE_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    case UPDATE_USER:
      return action.payload;

    case DELETE_PRODUCT:
      return action.payload;

    case ADD_FAVORITES:
      return {
        ...state,
        allFavorites: [...state.allFavorites, action.payload],
      };

    case REMOVE_FAVORITES:
      // eslint-disable-next-line no-case-declarations
      let productRemove = state.allFavorites.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        allFavorites: productRemove,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        errors: {},
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };
    case ERRORS:
      // eslint-disable-next-line no-case-declarations
      const objError = action.payload;
      return {
        ...state,
        errors: { ...state.errors, [objError.type]: objError.error },
      };

    case FILTROS_AND_PAGINATION:
      return {
        ...state,
        indexProductShow: action.payload,
      };

    case GET_ALL_SELECTS:
      return {
        ...state,
        selectFilter: action.payload,
      };

    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case USER_LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return { ...state };
  }
};

export default reducer;
