import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import appStore from '../Components/appStore.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './WatchPage'
import Body from './Body'

const Main=createBrowserRouter([{
  path:"/",
  element:<Body/>,
 
},
{
  path:"/watch",
  element:<WatchPage/>
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router= {Main} />
    </Provider>
  </React.StrictMode>
  
)
