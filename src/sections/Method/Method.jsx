import styles from "./Method.module.css";
import dummy from "../../assets/about/dummy-image.jpg";
import PageContent from "../../components/PageContent/PageContent";

export const methods = [
  {
    image: dummy,
    title: "Escutamos e mergulhamos",
    description: "Começamos entendendo a fundo sua marca, sua essência, seus desafios e objetivos.",
  },
  {
    image: dummy,
    title: "Criamos com estratégia",
    description: "Nada de achismo. Toda criação é baseada em dados, cultura, tendências e posicionamento.",
  },
  {
    image: dummy,
    title: "Executamos com método",
    description: "Da ideia à entrega, nosso time coloca a mão na massa com agilidade, carinho e muito critério.",
  },
  {
    image: dummy,
    title: "Acompanhamos e otimizamos",
    description: "Analisamos métricas, aprendemos com o mercado e ajustamos para entregar ainda mais resultado.",
  },
];

function Method() {
  return (
    <div className={`section `}>
      <div className={`container ${styles.container}`}>
        <PageContent sessionLabel={"Como Trabalhamos (METHOD)"} title={"A gente planeja, cria, executa e acompanha, com estratégia e coração"} content={"Nada de fórmula pronta. Aqui, cada cliente é único, e cada entrega é feita com base em escuta, pesquisa e criação com propósito. Nosso processo une planejamento estratégico e criatividade com acompanhamento próximo dos resultados."} />

        <div className={styles.methods}>
          {methods.map((method, index) => {
            return (
              <div key={index} className={styles.method}>
                <div className={styles.methodImg}>
                  <img src={method.image} alt="" />
                </div>
                <div className={styles.methodContent}>
                  <p className={styles.title}>{method.title}</p>
                  <p className={styles.content}>{method.description}</p>
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
