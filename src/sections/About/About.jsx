import styles from "./About.module.css";
import logoImg from "../../assets/about/logo-img.png";
import dummy from "../../assets/about/dummy-image.jpg";
import PageContent from "../../components/PageContent/PageContent";

// ARRAY DE OBJETOS "VALORES"
export const skills = [
  {
    image: dummy,
    description: "TESTE Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* BLOCO SOBRE */}
        <div className={styles.about}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <PageContent
                sessionLabel={"Quem somos (ABOUT)"}
                title={"Uma agência com sotaque, alma criativa e visão de futuro"}
                content={
                  <>
                    A Trupi nasceu em Pernambuco com um propósito claro: ajudar marcas a se posicionarem de forma autêntica, estratégica e com aquele toque cultural que só a nossa região tem. <br />
                    Mais que uma agência de marketing e propaganda, somos uma verdadeira Trupi, um grupo de gente criativa, conectada, curiosa, apaixonada por contar boas histórias e fazer marcas crescerem com propósito.
                    <br />
                    Nosso nome carrega o espírito da coletividade, da arte e da bagunça boa que transforma.
                    <br />
                    Aqui, cada projeto é tratado com leveza, estratégia, responsabilidade e criatividade com sotaque.
                  </>
                }
              />
            </div>
            <div className={styles.logoImg}>
              <img src={logoImg} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.missionEvalues}>
          {/* BLOCO MISSÃO */}
          <div className={styles.mission}>
            <PageContent title={"Nossa missão"} content={<>Atuar como parceira estratégica de marcas que buscam crescimento digital com propósito, oferecendo soluções criativas, eficientes e culturalmente relevantes.</>} />
            <div>
              <img src={dummy} alt="" />
            </div>
          </div>

          {/* BLOCO VALORES */}
          <div className={styles.values}>
            <PageContent title={"Nosso valores"} content={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut condimentum enim. Pellentesque tincidunt enim elementum lacus pulvinar rutrum. Pellentesque.</>} />

            {/* lista de valores dinamicos */}
            <div>
              {skills.map((skill, index) => {
                return (
                  <div className={styles.skill} key={index}>
                    <div className={styles.skillImg}>
                      <img src={skill.image} alt="" />
                    </div>
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
