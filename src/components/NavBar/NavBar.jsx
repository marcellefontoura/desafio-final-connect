import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// BrowserRouter: Serve como um container que vai permitir o uso e habilitar todas as nossas rotas.
// Routes: Funciona como uma "caixa" para todas as nossas rotas. Dentro dele, vamos colocar cada rota que queremos. Então cada rota estará dentro do Routes.
// Route: Define cada rota individual. Com ele, podemos dizer qual página ou componente mostrar para cada URL específica.
// Link: É usado para criar links entre as páginas, substituindo a tag <a>, o que torna a navegação mais rápida e sem recarregar a página inteira.


//importando todos os componentes para serem usados nas rotas
import Inicio from "../Inicio/Inicio";
import Acoes from "../AcoesDaConnect/AcoesDaConnect";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";

//importando as imagens da NavBar

import Logo from "../../assets/logo.png";
import FotoDoPerfil from "../../assets/perfil.jpeg";

//importando a folha de estilo da NavBAr

import styles from "./NavBar.module.scss"


function NavBar() {
  return (
    <BrowserRouter>
      <nav className={styles.navBar}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>

        <ul>
          <li>
            <Link to="/"> Início </Link>
          </li>
          <li>
            <Link to="/acoes"> Ações da Connect</Link>
          </li>
          <li>
            <Link to="/quemSomos"> Quem Somos </Link>
          </li>
        </ul>

        <Link to="/perfil">
          <img className={styles.imgPerfil} src={FotoDoPerfil} alt="Foto do perfil" />
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
