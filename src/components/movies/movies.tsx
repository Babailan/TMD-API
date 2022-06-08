import Card from "../cards";
import styles from "./movies.module.scss";

type props = {
  data: {
    results: Array<any>;
    pages: any;
  };
  subject: string;
  type: string;
};

const Movies = ({ data, subject, type }: props) => {
  return (
    <div className={styles.container}>
      <h3>{subject}</h3>
      <div className={styles.list}>
        {data.results.map(({ id, poster_path, title, name }) => {
          if (!poster_path) {
            return;
          }
          return (
            <Card
              id={id}
              type={type}
              url={poster_path}
              title={title ? title : name}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
