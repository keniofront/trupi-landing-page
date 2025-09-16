import styles from "./Home.module.css";
import Button from "../../components/Button/Button";
import heroImgFront from "../../assets/home/hero-img-front.png";

export default function Home() {
  // Função para rolar até uma seção específica
  const handleClick = (sectionId) => {
    // Busca o elemento pelo ID
    const section = document.getElementById(sectionId);

    // Se o elemento existe, rola a página até ele
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* container de texto */}
        <div className={`${styles.textContainer}`}>
          <div className={styles.textContent}>
            {/* Desktop */}
            <h1 className={styles.desktop}>Sua marca com identidade, estratégia e aquele tempero que faz a diferença</h1>
            <h4 className={styles.desktop}>Na Trupi, a gente transforma ideias em presença, com criatividade, cultura e performance</h4>

            {/* Mobile */}
            <h1 className={styles.mobile}>Sua marca com identidade</h1>
            <h4 className={styles.mobile}>Na Trupi, a gente transforma ideias em presença</h4>

            <Button className={styles.button} onClick={() => handleClick("contact")} text="Solicite um orçamento" />
          </div>
        </div>

        {/* container da imagem em destaque*/}
        <div className={`${styles.heroImgFront}`}>
          <img src={heroImgFront} alt="Hero Feature" />
        </div>
      </div>

      {/* fundo */}
      <div className={styles.background}></div>
    </section>
  );
}
