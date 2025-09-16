import styles from "./PageContent.module.css";

const PageContent = ({ className, sessionLabel, title, content, showSession = true, showTitle = true, showContent = true }) => {
  return (
    <div className={`${styles.content} ${className}`}>
      {showSession && <h3>{sessionLabel}</h3>}
      {showTitle && <h1>{title}</h1>}
      {showContent && <p>{content}</p>}
    </div>
  );
};

export default PageContent;
