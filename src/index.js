import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import Footer from "./components/Footer";
import AddProdauctPage from "./pages/add-product/AddProdauctPage";
import Profile from "./pages/profile/Profile";

const Root = () => {
  return (
    <div dir="ltr">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="add-product" element={<AddProdauctPage />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
