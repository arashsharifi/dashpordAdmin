import React, { useState } from "react";
import Myhome from "./pages/myhome/Myhome";
import { useRoutes } from "react-router-dom";
import UsersList from "./pages/users/UsersList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Product from "./pages/product/Product";
export default function App() {

  let router = useRoutes([
    { path: "/", element: <Myhome /> },
    { path: "/users", element: <UsersList /> },
    { path: "/newUser", element: <NewUser /> },
    { path: "/products", element: <Products /> },
    { path: "/product/:productID", element: <Product /> },
  ]);

 
  return (
    <div className="flex flex-col">
      <TopBar />
      <div className="flex  w-full  mt-24 relative">
        <div className="w-[40%] md:w-[20%] h-[100vh] fixed">
          <SideBar />
        </div>
        <div className=" w-[60%] md:w-[80%] absolute right-0">{router}</div>
      </div>
    </div>

  );
}
