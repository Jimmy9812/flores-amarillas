import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Flores from "./pages/Flores.jsx";


export default function App() {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Home />} />

      {/* Página de las flores */}
      <Route path="/flores" element={<Flores />} />

      {/* Si se pone otra ruta, redirige a Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  function App() {
  return (
    <div className="App">
      <Flores />
    </div>
  )
}
}
