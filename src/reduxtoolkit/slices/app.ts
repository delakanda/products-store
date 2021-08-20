import { createSlice } from '@reduxjs/toolkit'

type AppState = {
  currency: string
}

const initialState: AppState = {
  currency: 'USD'
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateCurrency: (state, action) => {
      state.currency = action.payload.currency
    }
  }
})

export const {
  updateCurrency
} = appSlice.actions

export default appSlice.reducer
