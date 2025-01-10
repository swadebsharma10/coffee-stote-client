import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import AddCoffee from './Pages/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
