import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Sheet from './class/Sheet'

const Sheet1 = new Sheet({})


const router = createBrowserRouter([
  {
    path: "/",
    element: <App sheet={Sheet1}/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
