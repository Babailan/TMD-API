import Image from "next/image";
import Router from "next/router";
import styles from "./cards.module.scss";

type props = {
  url?: string;
  title: string;
  id: string | number;
  overview: string;
};
const Cards = ({ url, title, id, overview }: props) => {
  const containerClicked = (e: { preventDefault: Function }) => {
    e.preventDefault();
    Router.push(`/watch?id=${id}`);
  };
  return (
    <div onClick={containerClicked} className={styles.container}>
      <div className={styles.images}>
        <Image src={url} loading="lazy" layout={"fill"} objectFit={"fill"} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.synopsis}>{overview}</p>
      </div>
      <div className={styles.blackBottom}></div>
    </div>
  );
};

export default Cards;
