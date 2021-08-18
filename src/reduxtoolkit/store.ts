import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '@app/reduxtoolkit/slices/cart'

const store = configureStore({
  reducer: {
    cartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
