import styles from "./genre.module.scss";
import { RootObject } from "../../interface/genre";
import Poster from "../poster";
import watchpush from "../../libs/watchpush";

type Props = {
  data: RootObject;
  type: string;
};
const Component = ({ data, type }: Props) => {
  return (
    <div className={styles.container}>
      {data.results.map(({ poster_path, title, id }) => {
        return (
          <div className={styles.card}>
            <Poster
              onClick={(e: any) => watchpush(e, { id: id, type: type })}
              poster_path={poster_path}
            />
            <span
              className={styles.title}
              onClick={(e) => watchpush(e, { id: id, type: type })}
            >
              {title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Component;
