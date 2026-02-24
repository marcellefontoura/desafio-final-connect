import styles from "./Inicio.module.scss";
import ImgInicial from "../../assets/img-tela-inicial.png";

function Inicio() {
  return (
    <section className={styles.container}>
      
      <div className={styles.textContainer}>
        <h1>
          Projetos Sociais <br />
          que transformam
        </h1>

        <p>
          Conectamos sua empresa com projetos sociais impactantes.
          <br />
          Juntos, criamos mudanças reais na comunidade.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img src={ImgInicial} alt="Projetos Sociais" />
      </div>

    </section>
  );
}

export default Inicio;