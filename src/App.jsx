import "leaflet/dist/leaflet.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Rutas from "./pages/Rutas";
import Preparacion from "./pages/Preparacion";
import Motivacion from "./pages/Motivacion";
import Transporte from "./pages/Transporte";
import Calendario from "./pages/Calendario";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rutas />} />
        <Route path="preparacion" element={<Preparacion />} />
        <Route path="motivacion" element={<Motivacion />} />
        <Route path="transporte" element={<Transporte />} />
        <Route path="calendario" element={<Calendario />} />
      </Route>
    </Routes>
  );
}

export default App;
