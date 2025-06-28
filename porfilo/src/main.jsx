// index.jsx or main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Intro, Footer, Career, NotFound } from './components/imports.js';


const router = createBrowserRouter([{
  path:"/",
  element: <App />,
  errorElement: <NotFound/>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
