import { useState } from 'react'

import './App.css'
import { Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from './Pages/Layouts/Layouts'
import Login from './Pages/Login/login'
import Register from './Pages/Register/Register'
import  {Toast}  from '@heroui/react';


/*
  Structure:
  Array
    → Parent Object
        → children Array
            → Child Objects
*/
 const router= createBrowserRouter(
    [
        {  path : "/" , element: <Layouts />, children:[
          { path : "login", element: <Login/>},
          { path: "register", element:<Register/> }
        ]

        }
    


   ] )










function App() {
  return (
    <>
      <Toast.Provider placement="bottom"   />

      <RouterProvider router={router} />
    </>
  );
}

export default App
