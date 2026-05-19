import React from 'react'
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import RootLayout from './components/RootLayout'
import Technologies from './components/Technologies'
import Login from './components/Login'
import Java from './components/Java'
import Vue from './components/Vue'
import Nodejs from './components/Nodejs'


function App() {
  const routingObj = createBrowserRouter([
    {
      path: '/',
      element:<RootLayout />,
      children:[
        {
          path: '',
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path:"login",
          element: <Login />
        },
        {
          path:"technologies",
          element: <Technologies />,
          children:[
            {
              path:"java",
              element:<Java />
            },
            {
              path:"vue",
              element:<Vue />
            },
            { 
              path:"nodejs",
              element:<Nodejs />
            },
            {
              path:"",
              element:<Navigate to='java' />
            }
          ]
        }

      ]
    }
  ]);

  return <RouterProvider router ={routingObj} /> ;
}

export default App
