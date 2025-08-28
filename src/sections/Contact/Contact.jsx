import styles from "./Contact.module.css";
import PageContent from "../../components/PageContent/PageContent";
import Form from "../../components/Form/Form";

function Contact() {
  return (
    <div className={`section`}>
      <div className={`container ${styles.container}`}>
        <PageContent
          sessionLabel={"Contato(contact)"}
          title={
            "Fale com a Trupi. Estamos prontos para ouvir você e ajudar no que for preciso"
          }
        />

        <div className={styles.contactContainer}>
          <div className={styles.channels}>
            <h2>Lorem ipsum dolor sit amet.</h2>

            <h4>Endereço:</h4>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              suscipit eligendi tempore. Repellendus, eius explicabo.
            </p>

            <h4>Contato:</h4>

            <div className={styles.contacts}>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className={styles.socialContainer}>
              <div>social1</div>
              <div>social2</div>
              <div>social3</div>
              <div>social4</div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <h2>Preencha o formulario abaixo Lorem ipsum dolor sit amet.</h2>

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
