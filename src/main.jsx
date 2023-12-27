import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Home from './pages/Home';
import "./index.css";
import OurServices from './pages/OurServices';
import ContactUs from './pages/ContactUs';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
          path:"",
          element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"ContactUs",
        element:<ContactUs/>
      },
      {
        path:"Services we provide",
        element:<OurServices/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

