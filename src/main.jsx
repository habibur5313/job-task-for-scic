import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Layout/MainLayout';
import AuthProvider from './Provider/AuthProvider';
import Register from './Pages/Authentication/Register';
import Login from './Pages/Authentication/Login';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router}/> 
     </AuthProvider>
  </StrictMode>,
)
