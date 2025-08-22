import styles from "./Method.module.css";
import dummy from "../../assets/about/dummy-image.jpg";
import PageContent from "../../components/PageContent/PageContent";

export const methods = [
  {
    image: dummy,
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, incidunt!",
  },
  {
    image: dummy,
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, incidunt!",
  },
  {
    image: dummy,
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, incidunt!",
  },
];

function Method() {
  return (
    <div className={`section`}>
      <div className={`container`}>
        <PageContent sessionLabel={"Como Trabalhamos (METHOD)"} title={"A gente planeja, cria, executa e acompanha, com estratégia e coração"} content={"Nada de fórmula pronta. Aqui, cada cliente é único, e cada entrega é feita com base em escuta, pesquisa e criação com propósito. Nosso processo une planejamento estratégico e criatividade com acompanhamento próximo dos resultados."} />

        <div className={styles.methods}>
          {methods.map((method, index) => {
            return (
              <div key={index} className={styles.method}>
                <div className={styles.methodImg}>
                  <img src={method.image} alt="" />
                </div>
                <div>
                  <p className={styles.methodTitle}>{method.title}</p>
                  <p className={styles.methodContent}>{method.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Method;
