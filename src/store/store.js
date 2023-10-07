import { configureStore } from '@reduxjs/toolkit';
import { elementSlice } from "./slices/elementSlice.js"
// import { cartSlice } from "./slices/cartSlice.js"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers(
  {
    [elementSlice.name]: elementSlice.reducer,
    // [cartSlice.name]: cartSlice.reducer
  }
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)