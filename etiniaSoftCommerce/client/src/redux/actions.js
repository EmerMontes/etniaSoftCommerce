import axios from 'axios';

export const GET_ALL_PRODUCTS="GET_ALL_PRODUCTS";
export const  GET_DETAIL_TALLA_COLOR="GET_DETAIL_TALLA_COLOR";
export const GET_ORDER_PRECIO_AZ="GET_ORDER_PRECIO_AZ";
export const GET_ORDER_PRECIO_ZA="GET_ORDER_PRECIO_ZA";
export const GET_FILTER_GENERO="GET_FILTER_GENERO";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const GET_FILTER_COLOR="GET_FILTER_COLOR";
export const GET_FILTER_TALLA="GET_FILTER_TALLA";
export const GET_FAVORITES="GET_FAVORITES";
export const GET_FILTER_DESCUENTO="GET_FILTER_DESCUENTO"
export const CREATE_PRODUCT = "CREATE_PRODUCT"

export function getAllProducts() {
    return async function (dispatch){
        const productsInfo=await axios.get(``)
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: productsInfo.data
        })
    }
  }
  export function getFavorites(id) {
    return async function(dispatch){
        const favorites=await axios.get(`${id}`)
        dispatch({
            type:GET_FAVORITES,
            payload:favorites.data
        })
    } 
  }

  export function getAllCategories() {
    return async function (dispatch) {
        const categoriesInfo = await axios.get('')
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: categoriesInfo.data
        })
    }
}
export function createProduct(payload) {
    return async function (dispatch) {
        const info = await axios.post('', payload)
        dispatch({
            type: CREATE_PRODUCT,
            payload: info.data
        })
    }
}
  
  export function getDetailTallaColor(id) {
    return  async function(dispatch){
        const productDetail=await axios.get('/products/${id}')
        dispatch({
            type:GET_DETAIL_TALLA_COLOR,
            payload:productDetail.data
        })
    }
  }
  
  export function getOrderPrecioAz() {
    return 
  }
  
  export function getOrderPrecioZa() {
    return 
  }
  
  export function getFilterGenero() {
    return
  }
  

  
  export function getFilterColor() {
    return
  }
  
  export function getFilterTalla() {
    return 
  }
  


