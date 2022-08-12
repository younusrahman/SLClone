import { createSlice } from '@reduxjs/toolkit'

// state
const initialState = {
  SearchTextFrom: "",
  SearchTextTo: "",
  Time : {},
  SeachResult:[],
  FilteringOptions:{
    TransportChange:"0",
    TravelVia:"",
    TransportMode:{
      LocalTraffic: false,
        Boat: false,
        Tram: true,
        Bus: true,
        CommuterTrain: true,
        Subway: true,
    },
    

  }
  

}








 const TravelSlice = createSlice({
    name: "Travel",
    initialState,
    reducers: {
      // this func  will loading start value true
      StartLoading: state => {
       state.Loading = true
      },

      SetSeachResult : (state, {payload}) => {
        state.SeachResult = payload
      },
      SetSearchTextFrom: (state, {payload}) => {
        state.SearchTextFrom = payload;
      },
      SetSearchTextTo: (state, {payload}) => {
        state.SearchTextTo = payload;
      },
      SetTravelVia: (state, {payload}) => {
        state.FilteringOptions.TravelVia = payload;
      },
      SetTransportMode: (state, {payload}) => {
        state.FilteringOptions.TransportMode = payload;
      },

      SetTransportChange: (state, {payload}) => {
        state.FilteringOptions.TransportChange =  payload
      },

      SetTime:(state, {payload}) => {
        state.Time =  payload;
      },

      SwapTextFieldsValues: (state, {payload}) => {
        state.SearchTextFrom = state.SearchTextTo;
        state.SearchTextTo = payload;     
      }
    }
  });
  




  export const { SetSeachResult, SetSearchTextFrom,SetTransportMode, SetTransportChange, SetTravelVia, SetSearchTextTo, SwapTextFieldsValues} = TravelSlice.actions
  export default TravelSlice.reducer;
  