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
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
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
          path: "product-details/:id",
          element: <ProductDetailsPage />,
          errorElement: <NotFoundPage />,
        },
      ],
    },
    {
      path: '/404.html',
      element: <NotFoundPage />
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
