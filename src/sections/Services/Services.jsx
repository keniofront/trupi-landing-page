import PageContent from "../../components/PageContent/PageContent";
import dummy from "../../assets/about/dummy-image.jpg";
import styles from "./Services.module.css";

export const services = [
  {
    title: "Projetos de Engenharia Industrial",
    description: "Desenvolvemos soluções completas para movimentação de cargas, desde o dimensionamento até a implantação.",
    image: dummy,
  },
  {
    title: "Montagem e Instalação Técnica",
    description: "Nossa equipe realiza instalações com precisão e segurança, dentro do cronograma e com mínimo impacto operacional.",
    image: dummy,
  },
  {
    title: "Manutenção Preventiva e Corretiva",
    description: "Planos inteligentes que evitam paradas não programadas e prolongam a vida útil dos seus equipamentos.",
    image: dummy,
  },
  {
    title: "Consultoria Técnica Especializada",
    description: "Diagnóstico e recomendação de melhorias com foco em eficiência operacional, segurança no trabalho e redução de custos com falhas.",
    image: dummy,
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <PageContent sessionLabel={"O que fazemos (SERVICES)"} title={"Soluções criativas e estratégicas pra fazer sua marca crescer com identidade"} />

        <div className={styles.cards}>
          {services.map((service, index) => {
            return (
              <div className={styles.card} key={index}>
                <img src={service.image} alt={service.title} />

                <div className={styles.cardText}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
