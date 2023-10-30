import { 
    GET_ALL_PRODUCTS,
    GET_DETAIL_SIZE_COLOR,
    GET_ORDER_PRICE,
    GET_FILTER_GENDER,
    GET_FILTER_CATEGORY,
    GET_FILTER_COLOR,
    GET_FILTER_SIZE,
    ADD_FAVORITES,
    REMOVE_FAVORITES,
    GET_FILTER_SALE,
    CREATE_PRODUCT,
    CREATE_USER,
    DELETE_PRODUCT,
    GET_ALL_USERS,
    GET_USERS_BY_NAME,
    UPDATE_USER,GET_BY_ID,
    GET_PRODUCTS_BY_NAME,
    CLEAR_ERRORS,
    ERRORS,
    PAGINATION,
    ADD_TO_CART
} from "./actions";



const initialState = {
   allProducts: [],
   productDetail: [],
   allFavorites: [],
   productShow: [],
   allUsers: [],
   cart: [],
   errors:{},
   page: null

};

const reducer = (state = initialState, action) => {
   switch (action.type) {
           case ADD_TO_CART:
           return {
             ...state,
             cart: [...state.cart, action.payload], // Agrega el producto al carrito
           };
           case GET_ALL_PRODUCTS:
           return {
               ...state,
               allProducts: action.payload,
               productShow: action.payload
           }
           case GET_BY_ID:
            return{
                ...state,
                productDetail:action.payload,
            }
            case GET_PRODUCTS_BY_NAME:
                return {
                    ...state,
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
               errors:{}
           }
           case CLEAR_ERRORS:
            return{
                ...state,
                errors: {}
            }    
            case ERRORS:
                const objError = action.payload
                return{
                    ...state,
                    errors: {...state.errors, [objError.type]: objError.error}
                }

        case GET_FILTER_GENDER:
                    return {
                        ...state, productShow: action.payload
                    }
    
        case GET_FILTER_CATEGORY:
                return {
                        ...state, productShow: action.payload
                    }
        

        case GET_FILTER_SIZE:
                return {
                    ...state, productShow: action.payload
                }
        
        case GET_FILTER_COLOR:
                return {
                    ...state, productShow: action.payload
                }
                   
        case GET_FILTER_SALE:
            return {
                ...state, productShow: action.payload
            }
        
        case PAGINATION:
                return {
                  ...state,
                  pagination: action.payload, 
                };
                   
       default:
           return {...state
           }
       }
};

export default reducer;




