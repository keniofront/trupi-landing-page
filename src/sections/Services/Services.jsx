import PageContent from "../../components/PageContent/PageContent";
import styles from "./Services.module.css";

// IMAGES
import service1 from "../../assets/services/services-img-1.jpg";
import service2 from "../../assets/services/services-img-2.jpg";
import service3 from "../../assets/services/services-img-3.jpg";
import service4 from "../../assets/services/services-img-4.jpg";

export const services = [
  {
    title: "Mídias Sociais",
    description: "Planejamento de conteúdo, gestão de perfis, campanhas patrocinadas e análise de resultados. Tudo com foco em engajamento real, audiência qualificada e voz de marca autêntica.",
    image: service1,
  },
  {
    title: "Branding",
    description: "Do nome ao manual. Criamos identidades que contam histórias, geram reconhecimento e fortalecem o posicionamento da sua empresa.",
    image: service2,
  },
  {
    title: "Web e UX",
    description: "Sites responsivos, landing pages inteligentes e experiência digital pensada pro seu público. Design funcional com foco em usabilidade e conversão.",
    image: service3,
  },
  {
    title: "Design Gráfico",
    description: "Tudo que sua marca precisa para se apresentar com profissionalismo: apresentações, catálogos, papelaria, cartões, manuais e mais, com consistência e personalidade.",
    image: service4,
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <PageContent sessionLabel={"O que fazemos (SERVICES)"} title={"Soluções criativas e estratégicas pra fazer sua marca crescer com identidade"} />
        </div>

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
