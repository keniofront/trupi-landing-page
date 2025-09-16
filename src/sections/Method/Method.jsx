import styles from "./Method.module.css";
import PageContent from "../../components/PageContent/PageContent";

// IMAGES
import method1 from "../../assets/method/method-img-1.png";
import method2 from "../../assets/method/method-img-2.png";
import method3 from "../../assets/method/method-img-3.png";
import method4 from "../../assets/method/method-img-4.png";

export const methods = [
  {
    image: method1,
    title: "Escutamos e mergulhamos",
    description: "Começamos entendendo a fundo sua marca, sua essência, seus desafios e objetivos.",
  },
  {
    image: method2,
    title: "Criamos com estratégia",
    description: "Nada de achismo. Toda criação é baseada em dados, cultura, tendências e posicionamento.",
  },
  {
    image: method3,
    title: "Executamos com método",
    description: "Da ideia à entrega, nosso time coloca a mão na massa com agilidade, carinho e muito critério.",
  },
  {
    image: method4,
    title: "Acompanhamos e otimizamos",
    description: "Analisamos métricas, aprendemos com o mercado e ajustamos para entregar ainda mais resultado.",
  },
];

function Method() {
  return (
    <div id="method" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <PageContent sessionLabel={"Como Trabalhamos"} title={"A gente planeja, cria, executa e acompanha, com estratégia e coração"} content={"Nada de fórmula pronta. Aqui, cada cliente é único, e cada entrega é feita com base em escuta, pesquisa e criação com propósito. Nosso processo une planejamento estratégico e criatividade com acompanhamento próximo dos resultados."} />

        <div className={styles.methods}>
          {methods.map((method, index) => {
            return (
              <div key={index} className={styles.method}>
                <div className={styles.methodImg}>
                  <img src={method.image} alt="" />
                </div>
                <div className={styles.methodContent}>
                  <h5>{method.title}</h5>
                  <p>{method.description}</p>
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
