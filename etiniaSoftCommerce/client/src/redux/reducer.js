import { GET_ALL_PRODUCTS, GET_DETAIL_SIZE_COLOR, GET_ORDER_PRICE,
    GET_FILTER_GENDER, GET_FILTER_CATEGORY, GET_FILTER_COLOR, GET_FILTER_SALE, ADD_FAVORITES,
    REMOVE_FAVORITES, GET_FILTER_SALE, CREATE_PRODUCT} from "../actions";


const initialState = {
   allProducts: [],
   productDetail: [],
   allFavorites: [],
   productShow: [],

};

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case GET_ALL_PRODUCTS:
           return {
               ...state,
               allProducts: action.payload,
               productShow: action.payload
           }
       
       case GET_DETAIL_SIZE_COLOR:
           return {
               ...state,
               productDetail: action.payload
           }
       case GET_ORDER_PRICE:
           
           return {
               ...state,
               productShow: action.payload
           }
       
       
        case ADD_FAVORITES:
            return {
                ...state,
                allFavorites: action.payload,
                allProducts: action.payload
            }

        case REMOVE_FAVORITES:
            return {
                ...state,
                allFavorites: action.payload,
                allProducts: action.payload //se puso para solucionar bug
                }
        

       case CREATE_PRODUCT:
           return {
               ...state,
               allProducts: [...state.allProducts,action.payload]
           }

       case GET_FILTER_GENDER:
                let allProductsGenero = state.productShow.filter((product) =>product.gender === action.payload)
                return {
                    ...state, productShow: allProductsGenero
                }
        
        
        case GET_FILTER_CATEGORY:
            let allProductsCategory = state.productShow.filter((product) =>product.category === action.payload)
            return {
                ...state, productShow: allProductsCategory
            }

        case GET_FILTER_SIZE:
            let allProductsTalla = state.productShow.filter((product) =>product.size === action.payload)
            return {
                ...state, productShow: allProductsTalla
            }
        
        case GET_FILTER_COLOR:
            let allProductsColor = state.productShow.filter((product) =>product.color === action.payload)
            return {
                ...state, productShow: allProductsColor
            }
                              
        case GET_FILTER_SALE:
            let allProductsDescuento = state.productShow.filter((product) =>product.sale !== null)
            return {
                ...state, productShow: allProductsDescuento
            }
                   
       default:
           return {...state
           }
       }
};

export default reducer;




