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
  return (
    <div className={styles.container}>
      <h2>Popular Movies</h2>
      <div className={styles.moviesList}>
        {data.results.map(({ title }) => {
          return <div rong-rong={process.env.imageUrl}>{title}</div>;
        })}
      </div>
    </div>
  );
};

export default PopularMovies;
