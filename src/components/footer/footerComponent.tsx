import styles from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.leftcol}>
        <a
          href={"https://github.com/Babailan/TMD-API"}
          target={"_blank"}
          className={styles.github}
        >
          REPOSITORY
        </a>
      </div>
      <div className={styles.centercol}>
        &copy;<span className={styles.year}>{year} Ronnel Babailan</span>
      </div>
      <div className={styles.rightcol}>
        <a
          href={"https://developers.themoviedb.org/"}
          target={"_blank"}
          className={styles.API}
        >
          USED API
        </a>
      </div>
    </div>
  );
};

export default Footer;
