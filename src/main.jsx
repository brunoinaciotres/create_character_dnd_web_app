import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Step2Page from './pages/Step2Page/Step2Page.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App step={"1"}></App>
  },
  {
    path: "/step2",
    element: <App step={"2"}></App>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
