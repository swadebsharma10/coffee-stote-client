import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AddCoffee from "./Pages/AddCoffee.jsx";
import UpdateCoffee from "./Pages/UpdateCoffee.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./Pages/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://coffe-store-server-beta-three.vercel.app/coffee`),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`https://coffe-store-server-beta-three.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/users",
        element: <Users/>,
        loader: ()=> fetch(`https://coffe-store-server-beta-three.vercel.app/users`)
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
