import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ["productDetail", "allProducts", "productShow", "indexProductShow", "allUsers", "errors", "selectFilter", "page", "localstorage", "shipments", "user"],
  whitelist: ['allFavorites', "cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//whitelist: estados con persistencia de datos.
//blacklist: estados sin persistencia de datos
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);