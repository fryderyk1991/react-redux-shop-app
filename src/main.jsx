import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from './redux/store';

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FavoritePage from './pages/FavoritePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AuthenticationPage from './pages/AuthenticationPage';
import NotFoundPage from "./pages/NotFoundPage";
import ProductsError from './pages/ProductsError';
import { productDetailsPageLoader } from './helpers/detailsPageLoader';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "favorite",
          element: <FavoritePage />,
        },
        {
          path: "product/:id",
          element: <ProductDetailsPage />,
          loader: productDetailsPageLoader,
          errorElement: <ProductsError />
        },
        {
          path: "authentication",
          element: <AuthenticationPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
