import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App2.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Step2Page from './pages/Step2Pages/Step2Page.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App2/>
  },
  // {
  //   path: "/step2",
  //   element: <App step={"2"}></App>
  // }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
