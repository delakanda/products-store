import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      // state.items = action.payload
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const {
  addToCart,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
