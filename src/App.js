// import NavBar from "../src/Components/NavBar";
// import ItemListContainer from "../src/Components/ItemListContainer";

// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <NavBar/>
//       <ItemListContainer greeting="Los libros destacados se veran proximamente"/>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./Components/Error404";


function App() {
  return (
    <div >
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
