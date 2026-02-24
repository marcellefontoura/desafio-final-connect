import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Inicio from "./components/Inicio/Inicio";
import Acoes from "./components/AcoesDaConnect/AcoesDaConnect";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Perfil from "./components/Perfil/Perfil";

import "./global.scss"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;