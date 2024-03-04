import { BrowserRouter, Route, Routes } from "react-router-dom";

// Rutas de la aplicación
import Home from "../components/Home";
import Error from "../components/Error";


export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}