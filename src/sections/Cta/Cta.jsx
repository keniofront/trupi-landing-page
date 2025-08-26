import Button from "../../components/Button/Button";
import PageContent from "../../components/PageContent/PageContent";
import styles from "./Cta.module.css";
import dummy from "../../assets/about/dummy-image.jpg";

export default function Cta() {
  return (
    <div className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <PageContent showSession={false} title={"Bora colocar sua marca no mundo do jeito certo? cta"} content={"Se você quer crescer com consistência, criatividade e estratégia, a Trupi é sua parceira. Vamos conversar sobre o futuro da sua marca?"} />

          <Button text={"lorem ipsum"} className={styles.btn}/>
        </div>

        <div className={styles.image}>
          <img src={dummy} alt="" />
        </div>
      </div>
    </div>
  );
}
