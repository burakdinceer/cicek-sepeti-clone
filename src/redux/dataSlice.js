import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

     const  initialState ={
    data:[]
 }

export const fetchData = createAsyncThunk("fetchData", async () => {
    const response = await axios.get('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/regions/list',{
        headers: {
            'X-RapidAPI-Key': '8541c0c127mshb5af1621c11bde1p13c28cjsn43a3bfc52ff0',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
          }
       
      } )
      return response?.data
      
})


export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled,(state,action) => {
            state.data = action.payload
        })
        console.log(builder)
    }
})

export default dataSlice.reducer