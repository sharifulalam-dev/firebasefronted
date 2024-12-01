import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Signin from "../Components/Signin";
import SignupForm from "../Components/Signup";
import MainLayout from "../MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
    ],
  },
]);

export default router;
