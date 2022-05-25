import Image from "next/image";
import styles from "./cards.module.scss";

type props = {
  url?: string;
  title: string;
};
const Cards = ({ url, title }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <Image src={url} layout={"fill"} objectFit={"fill"} />
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Cards;
