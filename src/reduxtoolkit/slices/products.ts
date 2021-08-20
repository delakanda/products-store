import { ProductType } from '@app/types/ProductsType'
import { createSlice } from '@reduxjs/toolkit'

type ProductState = {
  products: ProductType[]
}

const initialState: ProductState = {
  products: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload.products
    }
  }
})

export const {
  updateProducts
} = productsSlice.actions

export default productsSlice.reducer
