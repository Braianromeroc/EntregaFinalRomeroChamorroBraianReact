import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./Components/Error404";
import CartProvider from '../src/Context/CartContext';
import Cart from "./Components/Cart/Cart";
import {Checkout} from "../src/Components/Checkout/Checkout"


function App() {
  return (
    <div >
      <BrowserRouter >
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path={"/cart"} element={<Cart/>} />
              <Route path={"/checkout"} element={<Checkout/>} />
              <Route path={"*"} element={<Error404 />} />
            </Routes>
            </CartProvider>
          </BrowserRouter>
    </div>
  );
}

export default App;
