import styles from "./Testimonials.module.css";
import dummy from "../../assets/about/dummy-image.jpg";

// Mockdata - Testemunhos

const testimonialsData = [
  {
    title: "Experiência Excepcional",
    testimonial: "A qualidade do serviço superou todas as minhas expectativas. A equipe demonstrou profissionalismo e atenção aos detalhes impressionantes.",
    name: "Ana Silva",
    position: "Diretora de Marketing",
    avatar: dummy,
  },
  {
    title: "Suporte Incrível",
    testimonial: "O atendimento ao cliente é verdadeiramente excepcional. Sempre prontos para ajudar e resolver qualquer questão com rapidez e eficiência.",
    name: "Carlos Mendes",
    position: "CEO",
    avatar: dummy,
  },
];

// Componente Card

function TestimonialCard({ testimonial }) {
  return (
    <div className={styles.testimonialCard}>
      <h3>{testimonial.title}</h3>
      <p>{testimonial.testimonial}</p>

      <div className={styles.personContainer}>
        <div className={styles.personPhoto}>
          <img src={testimonial.avatar} alt="" />
        </div>

        <div className={styles.personContent}>
          <h4>{testimonial.name}</h4>
          <p>{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}

// Componente Final

function Testimonials() {
  // REGRAS!!!

  return (
    <div className={`section`}>
      <div className={`container`}>


         
        <div className={styles.cardContainer}>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
