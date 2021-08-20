import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '@app/reduxtoolkit/slices/cart'
import productsSlice from '@app/reduxtoolkit/slices/products'
import appSlice from '@app/reduxtoolkit/slices/app'

const store = configureStore({
  reducer: {
    cartSlice,
    productsSlice,
    appSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
