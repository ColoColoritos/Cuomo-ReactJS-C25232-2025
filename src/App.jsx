import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CarProvider } from "./context/CarContext/CarProvider";
import { Car } from "./components/Car/Car";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayouts";
import { AdminLayout } from "./layouts/AdminLayouts";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <CarProvider>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<ItemListContainer titulo={"Librería"} copy={"Descubre un mundo de creatividad y organización con nuestra exclusiva selección de lapiceras, agendas, cuadernos y accesorios, todos elegidos con el toque más suave y los colores más inspiradores."} />} />
            <Route path="/category/:category" element={<ItemListContainer copy={"Todo lo que necesitas al alcance de tu mano"}/>} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Car/>} />
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Login/>} /> 
            <Route path="alta-productos" element={
              <ProtectedRoute>
                <ProductFormContainer />
              </ProtectedRoute>} 
            />
          </Route>
        </Routes>
      </CarProvider>
    </BrowserRouter>
  );
}

export default App;