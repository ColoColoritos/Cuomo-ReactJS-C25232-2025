import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CarProvider } from "./context/CarContext/CarProvider";

function App() {
  return (
    <BrowserRouter>
      <CarProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </CarProvider>
    </BrowserRouter>
  );
}

export default App;