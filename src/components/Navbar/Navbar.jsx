import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { navbarLinks } from "../../data/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Quando chamada, essa função alterna o valor de isOpen entre true e false.
  const toggleMenu = () => setIsOpen(!isOpen);

  // useEffects fica monitorando "efeitos". Quando o usuário rola a página, essa função checa se a rolagem (scrollY) passou de 50 pixels. Se passou, ele muda scrolled para true, o que pode aplicar um estilo diferente na barra. Quando o componente é removido da tela, ele remove o "escutador de rolagem" para não deixar código rodando à toa.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // monitoração de eventos
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Renderização do Componente
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoContainer} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className={styles.logo}></span>
        </div>

        {/* RENDERIZAÇÃO DE LISTAS DINÂMICA */}
        <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
          {navbarLinks.map((link) => (
            <a key={link.id} href={link.url} onClick={() => setIsOpen(false)}>
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* MENU RESPONSIVO */}
      <div className={`${styles.hamburger} ${isOpen ? styles.ativo : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
