import { configureStore } from '@reduxjs/toolkit'
import { Cartslice } from '../ReduxToolkit/Cartslice'
import { Productslice } from '../ReduxToolkit/Productslice'

export const Store = configureStore({
  reducer: {
    Addtocartstore:Productslice.reducer,
    allCart: Cartslice.reducer
  },
})

