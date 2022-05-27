import styles from "../movies/movies.module.scss";
import Card from "../cards";
type props = {
  data: {
    results: Array<any>;
    pages: any;
  };
};

const UpComing = ({ data }: props) => {
  const imageUrl = process.env.imageUrl;
  return (
    <div className={styles.container}>
      <p style={{ fontSize: "1.3em", marginBottom: "0.5em" }}>
        Upcoming Movies
      </p>
      <div
        style={{
          display: "flex",
          gap: "1em",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data.results.map(({ title, backdrop_path, name, id }) => {
          return (
            <Card
              title={title ? title : name}
              url={`${imageUrl}${backdrop_path}`}
              id={id}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UpComing;
