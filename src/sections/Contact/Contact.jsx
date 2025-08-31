import styles from "./Contact.module.css";
import PageContent from "../../components/PageContent/PageContent";
import Form from "../../components/Form/Form";

// IMAGES
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <PageContent sessionLabel={"Contato(contact)"} title={"Fale com a Trupi. Estamos prontos para ouvir você e ajudar no que for preciso"} />

        <div className={styles.contactContainer}>
          <div className={styles.channels}>
            <h3>Nossos Canais de Atendimento</h3>

            <h4>Endereço:</h4>

            <div className={styles.data}>
              <FaLocationDot />

              <p>Rua das Palmeiras, 123 - Bairro Boa Vista Recife - PE, CEP 50050-000</p>
            </div>

            <h4>Contato:</h4>

            <div className={styles.contacts}>
              <div className={styles.data}>
                <FaPhone />
                <p>Telefone: (81) 3456-7890</p>
              </div>
              <div className={styles.data}>
                <IoLogoWhatsapp />
                <p>WhatsApp: (81) 9 8765-4321</p>
              </div>
              <div className={styles.data}>
                <IoMdMail />
                <p>E-mail: contato@trupi.com.br</p>
              </div>
              <div className={styles.data}>
                <FaClock />
                <p>Atendimento: Segunda a Sexta, das 8h às 18h</p>
              </div>
            </div>

            <div className={styles.socialContainer}>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                {" "}
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className={styles.formContainer}>
            <h3>Preencha o formulário e nossa equipe entrará em contato o mais rápido possível</h3>

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
