import { createSlice } from '@reduxjs/toolkit'

// state
const initialState = {
  FromObject: "",
  ToObject: "",
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
      SetFromObject: (state, {payload}) => {
        state.FromObject = payload;
      },
      SetToObject: (state, {payload}) => {
        state.ToObject = payload;
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

      SwapObjects: (state, {payload}) => {
        const preObj = state.FromObject
        state.FromObject= state.ToObject;
        state.ToObject = preObj;     
      }
    }
  });
  




  export const { SetSeachResult, SetFromObject,SetToObject,SetTransportMode, SetTransportChange, SetTravelVia, SwapObjects} = TravelSlice.actions
  export default TravelSlice.reducer;
  