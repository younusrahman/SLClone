import { configureStore } from '@reduxjs/toolkit'
import SLReducer from './slice/MainSlice'


export const store = configureStore({
  reducer: {SLSlice : SLReducer},
})