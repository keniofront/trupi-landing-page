import styles from "./About.module.css";
import PageContent from "../../components/PageContent/PageContent";

// IMAGES
import logo from "../../assets/about/trupi-final-brand.svg";
import mission from "../../assets/about/mission-image.jpg";
import value1 from "../../assets/about/value-icons-1.png";
import value2 from "../../assets/about/value-icons-2.png";
import value3 from "../../assets/about/value-icons-3.png";
import value4 from "../../assets/about/value-icons-4.png";
import value5 from "../../assets/about/value-icons-5.png";
import value6 from "../../assets/about/value-icons-6.png";

export const skills = [
  {
    image: value1,
    description: "Autenticidade com estratégia",
  },
  {
    image: value2,
    description: "Valorização do regional",
  },
  {
    image: value3,
    description: "Transparência e colaboração",
  },
  {
    image: value4,
    description: "Respeito à diversidade",
  },
  {
    image: value5,
    description: "Foco em resultado com criatividade",
  },
  {
    image: value6,
    description: "Foco em resultado com criatividade",
  },
];

function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* BLOCO SOBRE */}
        <div className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            {/* sessions title */}
            <PageContent sessionLabel={"Quem somos"} title={"Uma agência com sotaque, alma criativa e visão de futuro"} />

            {/* session content */}
            <div className={styles.row}>
              <div className={styles.textContent}>
                <p>A Trupi nasceu em Pernambuco com um propósito claro: ajudar marcas a se posicionarem de forma autêntica, estratégica e com aquele toque cultural que só a nossa região tem.</p>

                <p>Mais que uma agência de marketing e propaganda, somos uma verdadeira Trupi, um grupo de gente criativa, conectada, curiosa, apaixonada por contar boas histórias e fazer marcas crescerem com propósito.</p>

                <p>Nosso nome carrega o espírito da coletividade, da arte e da bagunça boa que transforma.</p>

                <p>Aqui, cada projeto é tratado com leveza, estratégia, responsabilidade e criatividade com sotaque.</p>
              </div>

              <div className={styles.imgContent}>
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.missionValuesSection}>
          {/* BLOCO MISSÃO */}
          <div className={styles.mission}>
            <PageContent showSession={false} title={"Nossa missão"} content={<>Atuar como parceira estratégica de marcas que buscam crescimento digital com propósito, oferecendo soluções criativas, eficientes e culturalmente relevantes.</>} />

            <div className={styles.missionImg}>
              <img src={mission} alt="" />
            </div>
          </div>

          {/* BLOCO VALORES */}
          <div className={styles.values}>
            <PageContent showSession={false} title={"Nosso valores"} content={"Autenticidade, coletividade e propósito. Criamos com leveza, responsabilidade e criatividade, sempre valorizando a cultura que nos inspira e conecta marcas a pessoas."} />

            {/* lista de valores dinamicos */}
            <div className={styles.skills}>
              {skills.map((skill, index) => {
                return (
                  <div className={styles.skill} key={index}>
                    <img src={skill.image} alt="" />
                    <p>{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
