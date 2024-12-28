import { useSelector, useDispatch } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import { login, authReadyAct } from "./app/features/userSlice";

// Layout
import MainLayout from "./Layout/MainLayout";

// pages
import {
  Info,
  Cart,
  Contact,
  Home,
  Login,
  Register,
  SingleProduct,
  Product,
} from "./pages";

import ProtectRoutes from "./components/ProtectRoutes";

// actions
import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const { user, authReady } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoutes user={user}>
          <MainLayout />
        </ProtectRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/info",
          element: <Info />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/singleproduct/:id",
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(authReadyAct());
    });
  }, []);

  if (!authReady) {
    return (
      <span className="grid place-items-center min-h-screen mx-auto loading loading-ring loading-lg"></span>
    );
  }
  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
