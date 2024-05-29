import {configureStore} from '@reduxjs/toolkit'
import homeReducer from './homeSlice'
import chatReducer from './chatsSlice'
const appStore=configureStore({
  reducer:{
    home:homeReducer,
    chat:chatReducer,
  }
})

export default appStore