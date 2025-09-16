import React, { useState } from "react"; // Importa o React e o hook useState para gerenciar o estado do componente
import styles from "./Testimonials.module.css"; // Importa os estilos CSS do módulo
import PageContent from "../../components/PageContent/PageContent"; // Componente de conteúdo da página

// IMAGES
import testImg1 from "../../assets/testimonials/test-img-01.jpg";
import testImg2 from "../../assets/testimonials/test-img-02.jpg";
import testImg3 from "../../assets/testimonials/test-img-03.jpg";
import testImg4 from "../../assets/testimonials/test-img-04.jpg";
import testImg5 from "../../assets/testimonials/test-img-05.jpg";
import testImg6 from "../../assets/testimonials/test-img-06.jpg";
import testImg7 from "../../assets/testimonials/test-img-07.jpg";
import testImg8 from "../../assets/testimonials/test-img-08.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

// Mockdata - Testemunhos
// Array com objetos representando cada depoimento
const testimonialsData = [
  {
    title: "Experiência Excepcional",
    testimonial: "A qualidade do serviço superou todas as minhas expectativas. A equipe demonstrou profissionalismo e atenção aos detalhes impressionantes.",
    name: "Ana Silva",
    position: "Diretora de Marketing",
    avatar: testImg2,
  },
  {
    title: "Suporte impressionante",
    testimonial: "O atendimento ao cliente é verdadeiramente excepcional. Sempre prontos para ajudar e resolver qualquer questão com rapidez e eficiência.",
    name: "Carlos Mendes",
    position: "CEO",
    avatar: testImg1,
  },
  {
    title: "Resultados Surpreendentes",
    testimonial: "Os resultados obtidos foram além do que imaginávamos. A estratégia implementada trouxe um crescimento significativo para nossa empresa.",
    name: "Mariana Costa",
    position: "Prod. Manager",
    avatar: testImg4,
  },
  {
    title: "Parceria de Confiança",
    testimonial: "Encontramos não apenas um fornecedor, mas um verdadeiro parceiro estratégico. A confiança e transparência fazem toda a diferença.",
    name: "Roberto Oliveira",
    position: "CTO",
    avatar: testImg3,
  },
  {
    title: "Inovação Constante",
    testimonial: "A capacidade de inovação e adaptação às novas tecnologias é impressionante. Sempre um passo à frente das tendências do mercado.",
    name: "Lucia Ferreira",
    position: "Head of Innovation",
    avatar: testImg6,
  },
  {
    title: "Eficiência Máxima",
    testimonial: "A otimização dos processos e a eficiência na entrega dos projetos nos permitiu acelerar significativamente nosso crescimento.",
    name: "Pedro Santos",
    position: "Operations Director",
    avatar: testImg5,
  },
  {
    title: "Qualidade Premium",
    testimonial: "A qualidade do trabalho entregue é consistentemente alta. Cada detalhe é cuidadosamente considerado e executado com precisão.",
    name: "Juliana Rocha",
    position: "Q.A.",
    avatar: testImg8,
  },
  {
    title: "Transformação Digital",
    testimonial: "A transformação digital da nossa empresa foi conduzida de forma excepcional. Resultados mensuráveis em tempo recorde.",
    name: "André Campos",
    position: "D. Manager",
    avatar: testImg7,
  },
];

// Componente Card
// Este componente recebe um depoimento e exibe suas informações
function TestimonialCard({ testimonial }) {
  return (
    <div className={styles.testimonialCard}>
      <h3>{testimonial.title}</h3>
      <p className={styles.text}>{testimonial.testimonial}</p>

      <div className={styles.personContainer}>
        <div className={styles.personPhoto}>
          <img src={testimonial.avatar} alt="" />
        </div>

        <div className={styles.personContent}>
          <h4>{testimonial.name}</h4>
          <p className={styles.pos}>{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}

// Componente Principal
function Testimonials() {
  // Estado para controlar a página atual (começa em 0)
  const [currentPage, setCurrentPage] = useState(0);
  // Estado para controlar quantos depoimentos por página
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 700 ? 1 : 4;
    }
    return 4;
  });

  // Atualiza testimonialsPerPage ao redimensionar a janela
  // e reseta a página para 0 se o número de cards mudar
  React.useEffect(() => {
    function handleResize() {
      setTestimonialsPerPage(window.innerWidth <= 700 ? 1 : 4);
      setCurrentPage(0);
    }
    window.addEventListener("resize", handleResize);
    // Inicializa corretamente ao montar
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcula o total de páginas necessárias para exibir todos os depoimentos
  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  // Função chamada ao clicar no botão "Próximos"
  // Avança para a próxima página, e volta para a primeira ao chegar no final
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // Calcula o índice inicial e final dos depoimentos a serem exibidos na página atual
  const startIndex = currentPage * testimonialsPerPage;
  const endIndex = startIndex + testimonialsPerPage;

  // Seleciona apenas os depoimentos da página atual usando slice
  const currentTestimonials = testimonialsData.slice(startIndex, endIndex);

  return (
    <div id="testimonials" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* Header */}
        <PageContent sessionLabel={"Depoimentos"} title={"Quem trabalha com a gente, vira fã e parceiro de jornada."} showContent={false} />

        {/* Cards Container*/}
        <div className={styles.cardContainer}>
          {currentTestimonials.map((testimonial, index) => (
            // Renderiza um card para cada depoimento da página atual
            <TestimonialCard key={startIndex + index} testimonial={testimonial} />
          ))}
        </div>

        {/* Navigation */}
        <div className={styles.nav}>
          <FaArrowRightLong className={styles.nextButton} onClick={nextPage} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
