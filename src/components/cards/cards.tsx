import Image from "next/image";
import styles from "./cards.module.scss";
import libs from "../../libs";

type props = {
  url?: string;
  title: string;
  id: string | number;
  overview: string;
  type: string;
};
const Cards = ({ url, title, id, overview, type }: props) => {
  return (
    <div
      onClick={(e) => libs.watchpush(e, { id, type })}
      className={styles.container}
    >
      <div className={styles.images}>
        <Image
          src={url}
          loading="lazy"
          layout={"fill"}
          objectFit={"fill"}
          alt={title}
        />
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
