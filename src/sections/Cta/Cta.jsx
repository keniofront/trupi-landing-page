import Button from "../../components/Button/Button";
import PageContent from "../../components/PageContent/PageContent";
import styles from "./Cta.module.css";
// import image from "../../assets/cta/cta-img.jpg";

export default function Cta() {
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <PageContent className={styles.pageContent} showSession={false} title={"Bora colocar sua marca no mundo do jeito certo?"} content={"Se você quer crescer com consistência, criatividade e estratégia, a Trupi é sua parceira. Vamos conversar sobre o futuro da sua marca?"} />

          <Button className={styles.button} onClick={() => handleClick("contact")} text="Solicite um orçamento" />
        </div>

        <div className={styles.image}>
          {/* <img src={image} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
