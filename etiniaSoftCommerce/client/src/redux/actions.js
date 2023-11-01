import axios from "axios";
//Routes Get
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL_SIZE_COLOR = "GET_DETAIL_SIZE_COLOR";
export const GET_ORDER_PRICE = "GET_ORDER_PRICE";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const GET_BY_ID = "GET_BY_ID";
//routes Delete
export const DELETE_PRODUCT = "DELETE_PRODUCT";
//Routes Post
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_USER = "CREATE_USER";
//routes Put
export const UPDATE_USER = "UPDATE_USER";
//Filters
export const GET_FILTER_GENDER = "GET_FILTER_GENDER";
export const GET_FILTER_CATEGORY = "GET_FILTER_CATEGORY";
export const GET_FILTER_COLOR = "GET_FILTER_COLOR";
export const GET_FILTER_SIZE = "GET_FILTER_SIZE";
export const GET_FILTER_SALE = "GET_FILTER_SALE";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const PAGINATION ="SET_PAGINATION"

export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const ERRORS = "ERRORS";
//carrito
export const ADD_TO_CART ="ADD_TO_CART";

export const FILTROS_AND_PAGINATION = "FILTROS_AND_PAGINATION";
//login/out
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";


const URL = "http://localhost:3001";


export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function setNewErrors(obj) {
  return async function (dispatch) {

    dispatch({
      type: ERRORS,
      payload: obj,
    });
  };
}

export function clearErrors() {
  return async function (dispatch) {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
}

export function getProductsname(name) {
  return async function (dispatch) {
    const productsname = (await axios.get(`${URL}/products/name/${name}`)).data;
    dispatch({
      type: GET_PRODUCTS_BY_NAME,
      payload: productsname,
    });
  };
}

export function getByID(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`${URL}/products/${id}`);
    dispatch({
      type: GET_BY_ID,
      payload: data,
    });
  };
}

export function getUsersByName(name) {
  return async function (dispatch) {
    const response = (await axios.get(`${URL}` + name)).data;
    dispatch({
      type: GET_USERS_BY_NAME,
      payload: response,
    });
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    const allUsers = await axios.get(`${URL}/users`);
    dispatch({
      type: GET_ALL_USERS,
      payload: allUsers.data,
    });
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    const deletedProduct = await axios.delete(`${URL}/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: deletedProduct.data,
    });
  };
}

export function updateUser(payload) {
  return async function (dispatch) {
    const info = await axios.put(`${URL}/${payload.id}`, payload);
    dispatch({
      type: UPDATE_USER,
      payload: info.data,
    });
  };
}

export function createUser(payload) {
  return async function (dispatch) {
    const info = await axios.post(`${URL}`, payload);
    dispatch({
      type: CREATE_USER,
      payload: info.data,
    });
  };
}


export function getAllProducts() {
  return async function (dispatch) {
    const productsInfo = await axios.get(`${URL}/products`);

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: productsInfo.data.results,
    });
  };
}

export function getAddFavorites(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/favorites`);
      return dispatch({
        type: ADD_FAVORITES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAVORITES,
    payload: id,
  };
}


export function createProduct(newproduct) {
  return async function (dispatch) {
    const info = await axios.post(`${URL}/products`, newproduct);
    dispatch({
      type: CREATE_PRODUCT,
      payload: info.data,
    });
  };
}

export const getFiltersAndPagination = (filtros, pageNumber) => {
  return async (dispatch) => {
    // Construye un objeto que solo incluye filtros que tienen un valor definido y no son nulos
    const filtrosValidos = Object.keys(filtros).reduce((acc, key) => {
      if (filtros[key] !== null && filtros[key] !== undefined) {
        acc[key] = filtros[key];
      }
      return acc;
    }, {});

    try {
      // Construye la cadena de consulta de la URL para filtros y paginación
      const queryString = new URLSearchParams(filtrosValidos).toString();
      const url = `${URL}/products?${queryString}&page=${pageNumber}`;
      console.log(url);
      const response = await axios.get(url);
   
      dispatch({
        type: FILTROS_AND_PAGINATION,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error en la solicitud de paginación con filtros:", error);
    }
  };
};

export function userLogin(userData) {
  return {
    type: USER_LOGIN,
    payload: userData,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}