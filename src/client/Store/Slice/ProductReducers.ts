import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';


export const ProductSlice= createSlice({
  name: 'product',

  initialState: {
    name: null
  },

  reducers: {
    setProductData: (state, action) => {
      state.name = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', action.payload);

      if (!action.payload.product.name) {
        return state;
      }

      state.name = action.payload.product.name;
    }
  }
});

export const { setProductData } = ProductSlice.actions;




export default ProductSlice.reducer;
