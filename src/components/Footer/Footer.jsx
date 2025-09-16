import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p>© 2025 Trupi - Propaganda e Marketing. Todos os direitos reservados.</p>
          {/* <div className={styles.legal}>
            <a href="">[Política de Privacidade]</a>
            <a href="">[Termos de Uso]</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
