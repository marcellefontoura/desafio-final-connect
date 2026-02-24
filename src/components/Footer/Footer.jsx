//importando as imagens do footer
import Logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

//importando a folha de estilo do footer
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Esquerda */}
        <div className={styles.brand}>
          <img className={styles.logo} src={Logo} alt="Logo Connect" />
          <span className={styles.name}>Connect</span>
        </div>

        {/* Centro */}
        <p className={styles.centerText}>
          © 2026 Vai na Web &amp; Empower. Todos os direitos reservados.
          <br />
          Projeto destinado exclusivamente a fins educativos.
        </p>

        {/* Direita */}
        <div className={styles.social}>
          <a href="#" aria-label="WhatsApp">
            <img src={Whatsapp} alt="WhatsApp" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;