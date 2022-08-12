import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    SearchText: "",
    SeachResult:[]      
  }
  

const DeparturesSlice = createSlice({
    name : "Departure",
    initialState,
    reducers : {
        SetSearchText : (state, {payload}) =>{
            state.SearchText = payload
        },

        SetSeachResult : (state, {payload}) => {
            state.SeachResult = payload
        }
    }
})

export const {SetSearchText, SetSeachResult} = DeparturesSlice.actions
export default DeparturesSlice.reducer;