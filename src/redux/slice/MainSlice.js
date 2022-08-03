import { createSlice } from '@reduxjs/toolkit'
const axios = require('axios').default;

// state
const initialState = {
  loading: false,
  hasErrors: false,
  AllPlace : []
}








 const SLSlice = createSlice({
    name: "SL",
    initialState,
    reducers: {
      // this func  will loading start value true
      getAllPlace: state => {
       state.loading = true
      },
            // this func  will add value to state & stop loading & no error
      getAllPlaceSuccess : (state, { payload }) => {
        state.AllPlace = payload
        state.loading = false
        state.hasErrors = false
      },
                  // this func  will add value to state & stop loading & error true
      getAllPlaceFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
    }
  });
  

  export function fetchAllPlace(url) {
    return async dispatch => {
      dispatch(getAllPlace())
  
      try {
        const response = await fetch(url)
        const data = await response.json()
  
        dispatch(getAllPlaceSuccess(data))
      } catch (error) {
        dispatch(getAllPlaceFailure())
      }
    }
  }

  // A selector will display state 
  export const getAllPlaceSelector = state => state.SLSlice

  export const { getAllPlace, getAllPlaceSuccess, getAllPlaceFailure } = SLSlice.actions
  export default SLSlice.reducer;
  