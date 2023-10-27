import axios from 'axios';
//Routes Get
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL_SIZE_COLOR = "GET_DETAIL_SIZE_COLOR";
export const GET_ORDER_PRICE = "GET_ORDER_PRICE";
export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_USERS_BY_NAME="GET_USERS_BY_NAME"
export const ADD_FAVORITES = "ADD_FAVORITES";
//routes Delete
export const DELETE_PRODUCT = "DELETE_PRODUCT"

//Routes Post
export const CREATE_PRODUCT = "CREATE_PRODUCT";

export const CREATE_USER = "CREATE_USER"
//routes Put
export const UPDATE_USER = "UPDATE_USER"
//Filters
export const GET_FILTER_GENDER = "GET_FILTER_GENDER";
export const GET_FILTER_CATEGORY = "GET_FILTER_CATEGORY";
export const GET_FILTER_COLOR = "GET_FILTER_COLOR";
export const GET_FILTER_SIZE = "GET_FILTER_SIZE";
export const GET_FILTER_SALE = "GET_FILTER_SALE";
export const REMOVE_FAVORITES="REMOVE_FAVORITES";

const URL='http://localhost:3001'

export function getUsersByName(name){
  return async function(dispatch){
    const response = (await axios.get(`${URL}` + name)).data
    dispatch({
        type: GET_USERS_BY_NAME,
        payload: response
    })
}
}

export function getAllUsers() {
  return async function (dispatch) {
      const allUsers = await axios.get(`${URL}/users`)
      dispatch({
          type: GET_ALL_USERS,
          payload: allUsers.data
      })
  }
}


export function deleteProduct(id) {
  return async function (dispatch) {
      const deletedProduct = await axios.delete(`${URL}/products/${id}`)
      dispatch({
          type: DELETE_PRODUCT,
          payload: deletedProduct.data
      })
  }
}

export function updateUser(payload) {
  return async function (dispatch) {
      const info = await axios.put(`${URL}/${payload.id}`, payload)
      dispatch({
          type: UPDATE_USER,
          payload: info.data
      })
  }
}

export function createUser(payload) {
  return async function (dispatch) {
      const info = await axios.post(`${URL}`, payload)
      dispatch({
          type: CREATE_USER,
          payload: info.data
      })
  }
}

export function filtrarPorDescuento(descuento) {
  return{
      type: GET_FILTER_SIZE,
      payload: descuento
  }
}

export function getAllProducts() {
  return async function (dispatch) {
    const productsInfo = await axios.get(`${URL}/products/list`);
    console.log (productsInfo)
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: productsInfo.data
    });
  }
}

export function getAddFavorites(id) {
  return async  (dispatch)=> {
   try{
    const {data} = await axios.get(`${URL}/favorites`);
    return dispatch({
      type: ADD_FAVORITES,
      payload:data,
    });
   }catch(error){
    console.log(error);
   }
  };
};

export function removeFav (id) {
     return {
        type:REMOVE_FAVORITES,
        payload: id 
     } 
}


export function getAllCategories(category) {
  return{
    type:GET_FILTER_CATEGORY,
    payload:category
  }

}

export function createProduct(newproduct) {
  return async function (dispatch) {
    const info = await axios.post(`${URL}/products`,newproduct);
    dispatch({
      type: CREATE_PRODUCT,
      payload: info.data
    });
  }
}

export function getDetailTallaColor(name) {
  return async function (dispatch) {
    const productDetail = await axios.get(`${URL}/products/${name}`);
    dispatch({
      type: GET_DETAIL_SIZE_COLOR,
      payload: productDetail.data
    });
  }
}

export function getOrderPrecio(order) {
  return async function(dispatch) {
    const productorder=await axios.get(`${URL}/order/${order}`);
    dispatch({
      type:GET_ORDER_PRICE,
      payload:productorder
    });
   
  };
}

export function getFilterGenero(genero) {
  return {
    type: GET_FILTER_GENDER,
    payload:genero
  };
}

export function getFilterColor(color) {
  return {
    type: GET_FILTER_COLOR,
    payload: color
  };
}

export function getFilterTalla(talla) {
  return {
    type: GET_FILTER_SIZE,
    payload:talla
}
}


