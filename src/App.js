import NavBar from "../src/Components/NavBar";
import ItemListContainer from "../src/Components/ItemListContainer";

import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Los libros destacados se veran proximamente"/>
    </div>
  );
}

export default App;
