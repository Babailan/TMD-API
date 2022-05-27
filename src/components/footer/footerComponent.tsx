import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <a href={"https://developers.themoviedb.org/"}>API</a>
    </div>
  );
};

export default Footer;
