import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Step1Page from './pages/Step1Page/Step1Page.jsx';
import ChooseRacePage from './pages/ChooseRacePage/ChooseRacePage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App> <Step1Page/> </App>
  },
  {
    path: "/choose-race",
    element: <App><ChooseRacePage/></App>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
