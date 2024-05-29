import {createSlice} from '@reduxjs/toolkit'

const chatSlice=createSlice({
  name:"chat",
  initialState:{
   messages:[]

   
  },
  reducers:{
    chatLoading(state,action){
     state.messages.splice(10,3)
     state.messages.unshift(action.payload)
    }
  }
})
export const {chatLoading}=chatSlice.actions;
export default chatSlice.reducer;