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
  ADD_TO_CART,
  USER_LOGIN,
  USER_LOGOUT,
  GET_ALL_SELECTS,
  LOCALSTORAGE,
  REMOVE_SHIPPING,
  UPDATE_SHIPPING,
  ADD_SHIPPING,
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
  shipments: [],
  user: null, // Agregar el estado del usuario
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
    case LOCALSTORAGE:
      return {
        ...state,
        localstorage: [action.payload],
      };
    case ADD_SHIPPING:
      return {
        ...state,
        shipments: [...state.shipments, action.payload],
      };
    case UPDATE_SHIPPING:
      const { shippingID, update } = action.payload;
      const updatedshipping = state.shipments.map((shipment) => {
        if (shippingID === shippingID) {
          return { ...shipment, ...update };
        } else {
          return shipment;
        }
      });
      return {
        ...state,
        shipments: updatedshipping,
      };
    case REMOVE_SHIPPING:
      const sendtodeleteID = action.payload;
      const filteredshipments = state.shipments.filter(
        (shipment) => shipment.ID !== sendtodeleteID
      );
      return {
        ...state,
        shipments: filteredshipments,
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
