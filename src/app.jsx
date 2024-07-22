import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Navbar from "./Components/Navbar/Navbar"
import './app.css'
import "./Style.scss"
import LeftBar from "./Components/LeftBar/LeftBar"
import RightBar from "./Components/RightBar/RightBar"
import Home from "./Pages/Home/Home"
import Profile from "./Pages/Profile/Profile"

import {createBrowserRouter, RouterProvider, Route, Outlet, Navigate} from 'react-router-dom';

export function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <div className="theme-dark">
        <Navbar />
        <div style={{display: "flex"}}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if(!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
      ),
      children: [
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
   <div>
    <RouterProvider router={router} />
   </div>
  )
}