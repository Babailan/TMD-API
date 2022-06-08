import Image from "next/image";
import styles from "./cards.module.scss";
import libs, { watchpush } from "../../libs";
import Poster from "../poster";

type props = {
  url: string;
  title: string;
  id: string | number;
  type: any;
};

const Cards = ({ title, id, type, url }: props) => {
  return (
    <div className={styles.card} key={id}>
      <Poster
        poster_path={url}
        title={title}
        onClick={(e) => {
          watchpush(e, { id: id, type: type });
        }}
      />
      <span
        className={styles.title}
        onClick={(e) => {
          watchpush(e, { id: id, type: type });
        }}
        title={title}
      >
        {title}
      </span>
    </div>
  );
};

export default Cards;
