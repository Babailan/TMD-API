import Card from "../cards";
import styles from "./popularMovies.module.scss";

type props = {
  data:
    | {
        results: Array<any>;
        pages: any;
      }
    | any;
};

const PopularMovies = ({ data }: props) => {
  const imageUrl = process.env.imageUrl;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Movies</h2>
      <div className={styles.moviesList}>
        {data.results.map(({ title, id, backdrop_path }) => {
          return (
            <Card key={id} title={title} url={`${imageUrl}${backdrop_path}`} />
          );
        })}
      </div>
    </div>
  );
};

export default PopularMovies;
