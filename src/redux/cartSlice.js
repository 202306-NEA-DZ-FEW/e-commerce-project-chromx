import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {},
})

export const cartReducer = cartSlice.reducer
export const {} = cartSlice.actions
