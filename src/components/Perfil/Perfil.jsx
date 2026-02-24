import ImgPerfil from "../../assets/perfil.jpg";
import styles from "./Perfil.module.scss";

function Perfil() {
   return (
      <section className={styles.container}>
        <div className={styles.card}>
  
          <div className={styles.imgContainer}>
            <img src={ImgPerfil} alt="Foto do voluntário" />
          </div>
  
          <div className={styles.info}>
            <h2>Marcelle Fontoura</h2>
            <span className={styles.status}>Estudante VNW</span>
  
            <p>
              Profissional em transição de carreira para a área de tecnologia, movida pela curiosidade e aprendizado contínuo. 
              Atualmente, aprofundando meus conhecimentos em desenvolvimento web.
            </p>
  
            <div className={styles.details}>
              <span>Rio de Janeiro,RJ</span>
              <span>marcellessfs@gmail.com</span>
              <span>Estudante desde 2023</span>
            </div>
  
            <div className={styles.tags}>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Front-End</span>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }

export default Perfil;