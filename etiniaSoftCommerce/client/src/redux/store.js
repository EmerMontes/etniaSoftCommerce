import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer'; // Reemplaza 'reducer' con la ubicación de tus reducers

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ["productDetail", "allProducts", "productShow", "indexProductShow", "allUsers", "errors", "selectFilter", "page", "localstorage", "shipments", "user"], // Datos que no deseas persistir
  whitelist: ['allFavorites', "cart"], // Datos que deseas persistir
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);