import Multirao from "../../assets/mutirao.png";
import Aulas from "../../assets/aulas.png";
import Esporte from "../../assets/esporte.png";
import Familia from "../../assets/familia.png";
import Futuro from "../../assets/futuro.png";
import Conecta from "../../assets/conecta.png";

import styles from "./AcoesDaConnect.module.scss";

function AcoesDaConnect() {
  return (
    <section className={styles.container}>
      
      <h2>Ações da Connect</h2>

      <p className={styles.subtitle}>
        Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas
        através de ações sociais que geram impacto real nas comunidades.
      </p>

      <div className={styles.grid}>

        <div className={styles.card}>
          <img src={Multirao} alt="Mutirão de reciclagem" />
          <h3>Mutirão de reciclagem</h3>
          <p>Coletar materiais recicláveis e orientar sobre descarte consciente.</p>
          <button>Quero Participar</button>
        </div>

        <div className={styles.card}>
          <img src={Aulas} alt="Aulas de Tecnologia" />
          <h3>Aulas de Tecnologia</h3>
          <p>Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.</p>
          <button>Quero Participar</button>
        </div>

        <div className={styles.card}>
          <img src={Esporte} alt="Esporte e Inclusão" />
          <h3>Esporte e Inclusão</h3>
          <p>Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.</p>
          <button>Quero Participar</button>
        </div>

        <div className={styles.card}>
          <img src={Familia} alt="Instituto grande família" />
          <h3>Instituto grande família</h3>
          <p>Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.</p>
          <button>Quero Doar</button>
        </div>

        <div className={styles.card}>
          <img src={Futuro} alt="Projeto Futuro na Escola" />
          <h3>Projeto Futuro na Escola</h3>
          <p>Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.</p>
          <button>Quero Doar</button>
        </div>

        <div className={styles.card}>
          <img src={Conecta} alt="Instituto Conecta Jovem" />
          <h3>Instituto Conecta Jovem</h3>
          <p>Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.</p>
          <button>Quero Doar</button>
        </div>

      </div>
    </section>
  );
}

export default AcoesDaConnect;