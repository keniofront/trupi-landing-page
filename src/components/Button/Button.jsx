import styles from "./Button.module.css";

/*
# COMO USAR:

  const handleClick = (sectionId) => {
    // Busca o elemento pelo ID
    const section = document.getElementById(sectionId);

    // Se o elemento existe, rola a página até ele
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

	return (
    <Button className={styles.button} onClick={() => handleClick("contact")} text="Solicite um orçamento" />

	);

*/

const Button = ({ className, onClick, text }) => {
  return (
    <button className={`${className} ${styles.button}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
