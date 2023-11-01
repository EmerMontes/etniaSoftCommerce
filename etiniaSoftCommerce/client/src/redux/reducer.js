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
  ADD_TO_CART,
  USER_LOGIN,
  USER_LOGOUT,
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
  page: null,
};

const reducer = (state = initialState, action) => {


  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ADD_TO_CART:
      return {
      ...state,
       cart: [...state.cart, action.payload], // Agrega el producto al carrito
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
        allUsers: [...allUsers, action.payload],
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

    default:
      return { ...state };

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
  }
};

export default reducer;
