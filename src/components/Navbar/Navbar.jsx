import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

// Navlinks data
// eslint-disable-next-line react-refresh/only-export-components
export const navbarLinks = [
  { title: "Sobre", url: "#about" },
  { title: "Serviços", url: "#services" },
  { title: "Portfolio", url: "#portfolio" },
  { title: "Depoimentos", url: "#testimonials" },
  { title: "Contato", url: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Quando chamada, essa função alterna o valor de isOpen entre true e false.
  const toggleMenu = () => setIsOpen(!isOpen);

  // monitor para o botão logomarca
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // monitoração de eventos
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // função para controlar o fechamento ao clicar em link ou hamburger
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Renderização do Componente
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoContainer} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className={styles.logo}></span>
        </div>
        {/* Navlinks dinâmicos*/}
        <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
          {navbarLinks.map((link, index) => (
            <a key={index} href={link.url} onClick={handleLinkClick}>
              {link.title}
            </a>
          ))}
        </div>
        {/* Icone do Menu Responsivo */}
        <div className={`${styles.hamburger} ${isOpen ? styles.ativo : ""}`} onClick={toggleMenu} aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
