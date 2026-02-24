import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import FotoDoPerfil from "../../assets/perfil.jpg";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="Logo" />
      </Link>

      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/acoes">Ações da Connect</Link></li>
        <li><Link to="/quemSomos">Quem Somos</Link></li>
      </ul>

      <Link to="/perfil">
        <img className={styles.imgPerfil} src={FotoDoPerfil} alt="Foto do perfil" />
      </Link>
    </nav>
  );
}

export default NavBar;