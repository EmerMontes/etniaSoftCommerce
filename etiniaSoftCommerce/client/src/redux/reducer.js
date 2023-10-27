import { GET_ALL_PRODUCTS, GET_DETAIL_SIZE_COLOR, GET_ORDER_PRICE,
    GET_FILTER_GENDER, GET_FILTER_CATEGORY, GET_FILTER_COLOR, GET_FILTER_SIZE, ADD_FAVORITES,
    REMOVE_FAVORITES, GET_FILTER_SALE, CREATE_PRODUCT, CREATE_USER, DELETE_PRODUCT,GET_ALL_USERS, GET_USERS_BY_NAME,UPDATE_USER} from "./actions";


const initialState = {
   allProducts: [],
   productDetail: [],
   allFavorites: [],
   productShow: [],
   allUsers: [],

};

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case GET_ALL_PRODUCTS:
           return {
               ...state,
               allProducts: action.payload,
               productShow: action.payload
           }
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload,
            }

        case GET_USERS_BY_NAME:
            return {
                ...state,
                allUsers: action.payload,
            }

        case CREATE_USER:
            return {
                    ...state,
                    allUsers: [...allUsers, action.payload]
            }
        case UPDATE_USER:
            return action.payload

        case DELETE_PRODUCT:
            return action.payload
       
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
                allFavorites: [...state.allFavorites,action.payload]
            }

        case REMOVE_FAVORITES:
            let productRemove = state.allFavorites.filter((product) =>product.id !== action.payload)
            return {
                ...state,
                allFavorites: productRemove
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




