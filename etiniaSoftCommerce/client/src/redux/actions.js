import axios from 'axios';
//routes Get
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL_SIZE_COLOR = "GET_DETAIL_SIZE_COLOR";
export const GET_ORDER_PRICE = "GET_ORDER_PRICE";
//Routes Post
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES="GET_REMOVE_FAVORITES";
//filters
export const GET_FILTER_GENDER = "GET_FILTER_GENDER";
export const GET_FILTER_CATEGORY = "GET_FILTER_CATEGORY";
export const GET_FILTER_COLOR = "GET_FILTER_COLOR";
export const GET_FILTER_SIZE = "GET_FILTER_SIZE";
export const GET_FILTER_SALE = "GET_FILTER_SALE";

const URL='http://localhost:3001'

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

export function PostAddFavorites(products) {
  return async  (dispatch)=> {
   try{
    const {data} = await axios.post(`${URL}/favorites`);
    return dispatch({
      type:GET_ADD_FAVORITES,
      payload:data,
    });
   }catch(error){
    console.log(error);
   }
  };
};

export const PostRemoveFav=(id)=>{
  return async (dispatch)=>{
    try{
      const{data}=await axios.delete(`${URL}/favorites`+id);
      return dispatch({
        type:GET_REMOVE_FAVORITES,
        payload:data,
      });
    }catch(error){
      console.log(error);
    }
  };
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


