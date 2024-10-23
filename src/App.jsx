import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { 
  HomeLayout,
  Login,
  Register,
  Error,
  Profile,
  IssueReturn,
  Wishlist,
  History,
  Admin,
  Landing,
  DashboardLayout} from './pages'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout />,
    errorElement:<Error />,
    children: [
     {
      index: true,
      element: <Landing />
      
     },
      {
        path:"register",
        element:<Register />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"error",
        element:<Error />
      },
      ,
      {
        path:"dashboard",
        element:<DashboardLayout />,
        children:[
          {
            index: true,
            element:<Profile />
          },
          {
            path:"issuereturn",
            element:<IssueReturn />
          },
          {
            path:"history",
            element:<History />
          },
          {
            path:"wishlist",
            element:<Wishlist />
          },
          {
            path:"admin",
            element:<Admin />
          } 
        ]
      }
    ]
  },
  
])
const App = () => {
  return (
    <RouterProvider router={router}/>
    
    
  )
}

export default App