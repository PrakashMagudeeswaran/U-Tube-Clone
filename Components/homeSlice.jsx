import {createSlice} from '@reduxjs/toolkit'


const homeSlice=createSlice({
name:"home",
initialState:{
  sidebar:false,
  mostpopular:null,
  search:{ },
  suggestion:false,
  keyword:'tamil new'
},
reducers:{
   hamburgfunc(state){
     state.sidebar=!state.sidebar;
   },
   mostpopular(state,action){
     state.mostpopular=(action.payload);
   },
   searchsuggestions(state,action){
     state.search={...action.payload};
   }
  ,
  setsuggestion(state,action){
    state.suggestion=action.payload;
  },
  setkeyword(state,action){
    state.keyword=action.payload;
  }

}
})

export const {hamburgfunc,mostpopular,setsuggestion,searchsuggestions,setkeyword}=homeSlice.actions;
export default homeSlice.reducer;