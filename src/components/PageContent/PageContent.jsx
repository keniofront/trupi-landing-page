import styles from "./PageContent.module.css";

const PageContent = ({ sessionLabel, title, content }) => {
  return (
    <div className={styles.content}>
      {<h3>{sessionLabel}</h3>}
      {<h1>{title}</h1>}
      {<p>{content}</p>}
    </div>
  );
};

export default PageContent;

// COMO ESTAVA!!!
// const PageContent = ({ sessionLabel, title, content, showSession = true, showTitle = true, showContent = true }) => {
//   return (
//     <div className={styles.content}>
//       {showSession && <h3>{sessionLabel}</h3>}
//       {showTitle && <h1>{title}</h1>}
//       {showContent && <p>{content}</p>}
//     </div>
//   );
