import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from './productTypes'

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], number>({
      query: (limit=5) => `products?limit=${limit}`,
    }),
  }),
})


export const { useGetProductsQuery } = productApi