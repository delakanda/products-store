import { ProductType } from '@app/types/ProductsType'
import { createSlice } from '@reduxjs/toolkit'

type CartSliceState = {
  showCart: boolean
  items: CartItem[]
}

export type CartItem = {
  quantity: number,
  product: ProductType
}

const initialState: CartSliceState = {
  showCart: false,
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItemExists = state.items.find((item) => item.product.id === action?.payload?.product?.id)
      if (cartItemExists) {
        cartItemExists.quantity++
      } else {
        const newItem: CartItem = {
          quantity: 1,
          product: action.payload.product
        }
        state.items.push(newItem)
      }
      state.showCart = true
    },
    incrementQuantity: (state, action) => {
      const cartItemExists = state.items.find((item) => item.product.id === action?.payload?.product?.id)
      if (cartItemExists) {
        cartItemExists.quantity++
      }
    },
    decrementQuantity: (state, action) => {
      const cartItemExists = state.items.find((item) => item.product.id === action?.payload?.product?.id)
      if (cartItemExists) {
        if (cartItemExists.quantity > 0) cartItemExists.quantity--
        if (cartItemExists.quantity === 0) {
          state.items =
            state.items.filter((item) => item.product.id !== action?.payload?.product?.id)
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    openCart: (state) => {
      state.showCart = true
    },
    closeCart: (state) => {
      state.showCart = false
    }
  }
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  openCart,
  closeCart
} = cartSlice.actions

export default cartSlice.reducer
