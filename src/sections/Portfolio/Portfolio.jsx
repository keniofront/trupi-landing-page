/*ACHO QUE AQUI VOU FAZER APENAS UM HOVER COM UM LINK PARA O SITE DA SIMONSEN */

import styles from "./Portfolio.module.css";
import PageContent from "../../components/PageContent/PageContent";
import dummy from "../../assets/about/dummy-image.jpg";

function Portfolio() {
  return (
    <div className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <PageContent sessionLabel={"Portfólio (PORT)"} title={"Marcas que evoluíram com a Trupi"} content={"De pequenos negócios a marcas que querem escalar, já ajudamos várias empresas a ganharem vida no digital, conquistarem seu público e alcançarem metas de verdade."} />
        </div>

        <div className={styles.clientsContent}>
          <div className={styles.client}>
            <img src={dummy} alt="" />
          </div>
          <div className={styles.client}>
            <img src={dummy} alt="" />
          </div>{" "}
          <div className={styles.client}>
            <img src={dummy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
