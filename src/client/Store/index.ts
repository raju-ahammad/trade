import { cartReducer } from './Slice/cart.slice';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Action } from 'redux';
import { productApi } from './product/Product';

console.log("productApi", productApi)

export const store = () => configureStore({
  reducer : {  
   [productApi.reducerPath]: productApi.reducer, cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
  devTools: true
});

export type AppStore = ReturnType<typeof store>;
export type Rootstate = ReturnType<AppStore['getState']>;



// export type AppStore = ReturnType<typeof store>;
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, 
// unknown, Action>;

export const wrapper = createWrapper<AppStore>(store);
