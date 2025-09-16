import styles from "./Portfolio.module.css";
import PageContent from "../../components/PageContent/PageContent";

// IMAGES
import simonsen from "../../assets/portfolio/brand-simonsen-img.png";
import flora from "../../assets/portfolio/logo-flora-urbana.png";
import crypto from "../../assets/portfolio/logo-cripto-lumen.png";

function Portfolio() {
  return (
    <div id="portfolio" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <PageContent sessionLabel={"Portfólio"} title={"Marcas que evoluíram com a Trupi"} />
        </div>

        <div className={styles.row}>
          <p>De pequenos negócios a marcas que querem escalar, já ajudamos várias empresas a ganharem vida no digital, conquistarem seu público e alcançarem metas de verdade.</p>

          <div className={styles.clientsContent}>
            <div className={styles.clientImage}>
              <img src={simonsen} alt="" />
            </div>
            <div className={styles.clientImage}>
              <img src={flora} alt="" />
            </div>{" "}
            <div className={styles.clientImage}>
              <img src={crypto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
