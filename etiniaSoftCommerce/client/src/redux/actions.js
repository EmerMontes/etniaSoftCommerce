import axios from 'axios';
//Routes Get
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL_SIZE_COLOR = "GET_DETAIL_SIZE_COLOR";
export const GET_ORDER_PRICE = "GET_ORDER_PRICE";
export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_USERS_BY_NAME="GET_USERS_BY_NAME"
export const GET_PRODUCTS_BY_NAME="GET_PRODUCTS_BY_NAME";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const GET_BY_ID="GET_BY_ID";
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

export const PAGINATION ="SET_PAGINATION"

export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const ERRORS = "ERRORS";
//carrito
export const ADD_TO_CART ="ADD_TO_CART";



const URL='http://localhost:3001'

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}


export function setNewErrors(obj){
  return async function(dispatch){
      dispatch({
          type: ERRORS,
          payload: obj
      })
  }
};

export function clearErrors(){
  return async function(dispatch){
      dispatch({
          type: CLEAR_ERRORS
      })
  }
};

export function getProductsname(name){
  return async function(dispatch){
    const productsname= (await axios.get(`${URL}/products/name/${name}`)).data
    dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: productsname
    })
}
}

export function getByID(id){
  return async function(dispatch){
    const {data}= await axios.get(`${URL}/products/${id}`)
    dispatch({
      type:GET_BY_ID,
      payload:data
    })
  }
}

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
  console.log(descuento)
  return async function (dispatch) {
    const productFilter = (await axios.get(`${URL}/products?sale=${descuento}`)).data
    console.log(productFilter)
    dispatch({
      type: GET_FILTER_SIZE,
      payload: productFilter
    })
  }
}


export function getAllProducts() {
  return async function (dispatch) {
    const productsInfo = await axios.get(`${URL}/products`);
 
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: productsInfo.data.results
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
}

export function removeFav (id) {
     return {
        type:REMOVE_FAVORITES,
        payload: id 
     } 
}


export function getFilterCategory(category) {
  return async function (dispatch) {
    const productFilter = (await axios.get(`${URL}/products?category=${category}`)).data
    console.log(productFilter)
    dispatch({
      type:GET_FILTER_CATEGORY,
      payload:productFilter
    })
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
      const productorder = (await axios.get(`${URL}/products?price=${order}`)).data;
      console.log(productorder)
       dispatch({
        type:GET_ORDER_PRICE,
        payload:productorder
      })
    
  }
}


export function getFilterGenero(genero) {
  return async function (dispatch) {
    const productFilter = (await axios.get(`${URL}/products?gender=${genero}`)).data
    dispatch({
      type: GET_FILTER_GENDER,
      payload:productFilter
    })
  }
}


export function getFilterColor(color) {
  return async function (dispatch) {
    const productFilter = (await axios.get(`${URL}/products?color=${color}`)).data
    dispatch({
      type: GET_FILTER_COLOR,
      payload: productFilter
    })
  }
}


export function getFilterTalla(talla) {
  return async function (dispatch) {
    const productFilter = (await axios.get(`${URL}/products?size=${talla}`)).data
    dispatch({
      type: GET_FILTER_SIZE,
      payload:productFilter
    })
  }
}


export const pagination = (pageNumber) => {
  return async (dispatch) => {
 console.log(`${URL}/products?page=${pageNumber}`);
    try {
      const response = await axios.get(`${URL}/products?page=${pageNumber}`);
      dispatch({
        type: PAGINATION,
        payload: response.data, 
      });
    } catch (error) {
      console.error('Error en la solicitud de paginación:', error);
    }
  };
};
